import { ITEM_INFO, ITEM_RECOMMEND } from '@constants/item'

const INITIAL_STATE = {
  itemInfo: {}
}

export default function item(state = INITIAL_STATE, action) {
  console.log(action)
  switch(action.type) {
    case ITEM_INFO: {
      return {
        ...state,
        itemInfo: action.payload.data.Data
      }
    }
    case ITEM_RECOMMEND: {
      return { ...state }
    }
    default:
      return state
  }
}
