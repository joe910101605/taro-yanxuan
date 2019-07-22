import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { CheckboxItem, InputNumber } from '@components'
import './index.scss'

export default class List extends Component {
  static defaultProps = {
    list: [],
    onUpdate: () => {},
    onUpdateCheck: () => {}
  }

  getBaseItem = (item) => ({
    cartId:item.id,
    skuId: item.skuId,
    type: item.type,
    extId: item.extId,
    cnt: item.cnt,
    checked: item.isCheck,
    canCheck: true,
    promId: this.props.promId,
    promType: this.props.promType
  })

  handleUpdate = (item, cnt) => {
    const payload = {
      ...this.getBaseItem(item), cnt
    }
    this.props.onUpdate(payload)
  }

  handleUpdateCheck = (item) => {
    const payload = {
      ...this.getBaseItem(item), checked: !item.isCheck
    }
    this.props.onUpdateCheck(payload)
  }

  handleRemove = () => {
    // XXX 暂未实现左滑删除
  }

  render () {
    const { list } = this.props

    return (
      <View className='cart-list'>
        {list.map(item => (
          <View
            key={item.id}
            className='cart-list__item'
          >
            <CheckboxItem
              checked={item.isCheck==1}
              onClick={this.handleUpdateCheck.bind(this, item)}
            />
            <Image
              className='cart-list__item-img'
              src={"http://152.136.98.71:8100/images/"+item.imgUrl}
            />
            <View className='cart-list__item-info'>
              <View className='cart-list__item-title'>
                {/*{!!item.prefix &&*/}
                {/*  <Text className='cart-list__item-title-tag'>{item.prefix}</Text>*/}
                {/*}*/}
                <Text className='cart-list__item-title-name' numberOfLines={1}>
                  {item.goodsName}
                </Text>
              </View>

              {/*<View className='cart-list__item-spec'>*/}
              {/*  <Text className='cart-list__item-spec-txt'>*/}
              {/*    {item.specList.map(sepc => sepc.specValue).join(' ')}*/}
              {/*  </Text>*/}
              {/*</View>*/}

              <View className='cart-list__item-wrap'>
                <Text className='cart-list__item-price'>
                  ¥{item.price}
                </Text>
                <View className='cart-list__item-num'>
                  <InputNumber
                    num={item.count}
                    onChange={this.handleUpdate.bind(this, item)}
                  />
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    )
  }
}
