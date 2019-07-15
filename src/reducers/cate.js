import { CATE_MENU, CATE_SUB, CATE_SUB_LIST } from '@constants/cate'

const INITIAL_STATE = {
  menu: [],
  category: [],
  subMenu: [],
  subCategory: {}
}

export default function cate(state = INITIAL_STATE, action) {
  switch(action.type) {
    case CATE_MENU: {
      const { categories } = action.payload
      const menu = categories.map(({ id, categoryName }) => ({ id, categoryName }))
      return { ...state, menu, category: categories }
    }
    case CATE_SUB: {
      return {
        ...state,
        subMenu: action.payload.categories
      }
    }
    case CATE_SUB_LIST: {

      const { category_id, rows } = action.payload
      return {
        ...state,
        subCategory: { ...state.subCategory, [category_id]: rows }
      }
    }
    default:
      return state
  }
}
