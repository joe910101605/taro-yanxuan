import Taro from '@tarojs/taro'
import {
  SEARCH_LIST
} from '@constants/search'

const INITIAL_STATE = {
  goodslist: {}
}

export default function cart(state = INITIAL_STATE, action) {

  switch(action.type) {
    case SEARCH_LIST:
      return {
        ...state,
        goodslist: action.payload.rows
      }
    default:
      return state
  }
}
