import {
  HOME_INFO,HOME_CATEGORIES,HOME_BANNERIMAGES, HOME_SEARCH_COUNT, HOME_RECOMMEND, HOME_PIN
} from '@constants/home'
import { hostIMG } from '@constants/api'

const INITIAL_STATE = {
  homeInfo: {},
  searchCount: 0,
  pin: [],
  recommend: []
}

export default function home(state = INITIAL_STATE, action) {
  switch(action.type) {
    case HOME_INFO: {
      return {
        ...state,
        homeInfo: action.payload
      }
    }

    case HOME_BANNERIMAGES: {
      return {
        ...state,
        banner_images: action.payload.banner_images
      }
    }
    case HOME_CATEGORIES: {
      const categories = action.payload.categories;
      const grid_list = [];
      categories.forEach(function (item) {
        grid_list.push({image:hostIMG+item.img_url,value:item.categoryName})
      })
      return {
        ...state,
        categories:grid_list
      }
    }
    case HOME_SEARCH_COUNT: {
      return {
        ...state,
        searchCount: action.payload.count
      }
    }
    case HOME_PIN: {
      // 每3个分成一组
      const pin = []
      action.payload.forEach((item, index) => {
        const groupIndex = parseInt(index / 3)
        if (!pin[groupIndex]) {
          pin[groupIndex] = []
        }
        pin[groupIndex].push(item)
      })
      return { ...state, pin }
    }
    case HOME_RECOMMEND: {
      return {
        ...state,
        recommend: state.recommend.concat(action.payload.goodslist)
      }
    }
    default:
      return state
  }
}
