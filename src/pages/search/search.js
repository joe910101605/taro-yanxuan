import Taro, { Component } from '@tarojs/taro'
import {View, ScrollView, Text} from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
import { ItemList, Loading } from '@components'
import { connect } from '@tarojs/redux'
import * as actions from '@actions/search'
import './search.scss'

@connect(state => state.search,actions )
class search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      value:""
    }
  }

  componentDidMount() {
    // this.props.dispatchSearch({value:this.state.value}).then(() => {
    //   this.setState({ loaded: true })
    // })
  }
  onSearchBarChange=(value)=>{
    this.setState({value:value});
  }

  onSearch=()=>{
    this.props.dispatchSearch({value:this.state.value}).then(() => {
      this.setState({ loaded: true })
    })
  }

  render () {

    const { goodslist } = this.props
    console.log(goodslist)
    return (
      <View className='item'>
        <AtSearchBar value={""} focus={true} onChange={this.onSearchBarChange} onActionClick={this.onSearch}/>
        <ScrollView
          scrollY
          className='item__wrap'
          style={{ height:"100%" }}
        >
          <ItemList list={goodslist}>
            <View className='cate-sub__list-title'>
              <Text className='cate-sub__list-title-txt'>
                {/*{item.frontName}*/}
              </Text>
            </View>
          </ItemList>
        </ScrollView>
      </View>
    )
  }
}

export default search
