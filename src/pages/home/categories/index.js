import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.scss'
import {
  AtGrid
// eslint-disable-next-line import/first
} from 'taro-ui'

export default class SwiperBanner extends Component {
  static defaultProps = {
    list: []
  }

  render () {
    const { list } = this.props
    return (
      <View>
      <AtGrid columnNum="3" mode='rect' data={list} />
      </View>
    )
  }
}
