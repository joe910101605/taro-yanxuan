import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import { ButtonItem, ItemList, Loading } from '@components'
import { connect } from '@tarojs/redux'
import * as actions from '@actions/cart'
import { API_CHECK_LOGIN } from '@constants/api'
import fetch from '@utils/request'
import { getWindowHeight } from '@utils/style'
import Tip from './tip'
import Gift from './gift'
import Empty from './empty'
import List from './list'
import Footer from './footer'
import './cart.scss'

@connect(state => state.cart, actions)
class Index extends Component {
  config = {
    navigationBarTitleText: '购物车'
  }

  state = {
    loaded: false
  }

  componentDidShow() {
    // fetch({ url: API_CHECK_LOGIN, showToast: false, autoLogin: false }).then((res) => {
    //   if (res) {

        this.props.dispatchCart()
        this.setState({ loaded: true })
        //this.props.dispatchCartNum()
        //this.props.dispatchRecommend()
      // } else {
      //   this.setState({ loaded: true, login: false })
      // }
    // })
  }

  toLogin = () => {
    Taro.navigateTo({
      url: '/pages/user-login/user-login'
    })
  }

  render () {
    const { cartInfo } = this.props

    const { goods = [],islogin } = cartInfo
    // const cartList = goods.filter(i => !i.promType)
    //const extList = recommend.extList || []
    const isEmpty = !goods.length
    const isShowFooter = !isEmpty

    if (!this.state.loaded) {
      return <Loading />
    }
    if (!islogin) {
      return (
        <View className='cart cart--not-login'>
          <Empty text='未登陆' />
          <View className='cart__login'>
            <ButtonItem
              type='primary'
              text='登录'
              onClick={this.toLogin}
              compStyle={{
                background: '#b59f7b',
                borderRadius: Taro.pxTransform(4)
              }}
            />
          </View>
        </View>
      )
    }

    return (
      <View className='cart'>
        <ScrollView
          scrollY
          className='cart__wrap'
          style={{ height: getWindowHeight() }}
        >
          <Tip list={cartInfo.policyDescList} />
          {isEmpty && <Empty />}

          {!isEmpty && <Gift data={goods[0]} />}

          {/*{!isEmpty && cartList.map((group, index) => (*/}
            <List
              // key={index}
              // promId={group.promId}
              // promType={group.promType}
              list={goods}
              onUpdate={this.props.dispatchUpdate}
              onUpdateCheck={this.props.dispatchUpdateCheck}
            />
          {/*))}*/}

          {/* 相关推荐
          {extList.map((ext, index) => (
            <ItemList key={index} list={ext.itemList}>
              <View className='cart__ext'>
                {!!ext.picUrl && <Image className='cart__ext-img' src={ext.picUrl} />}
                <Text className='cart__ext-txt'>{ext.desc}</Text>
              </View>
            </ItemList>
          ))}
          */}
          {/* 猜你喜欢
          <ItemList list={recommend.itemList}>
            <View className='cart__recommend'>
              <Text className='cart__recommend-txt'>{recommend.desc}</Text>
            </View>
          </ItemList>
          */}
          {isShowFooter &&
            <View className='cart__footer--placeholder' />
          }
        </ScrollView>

        {isShowFooter &&
          <View className='cart__footer'>
            <Footer
              cartInfo={cartInfo}
              onUpdateCheck={this.props.dispatchUpdateCheck}
            />
          </View>
        }
      </View>
    )
  }
}

export default Index
