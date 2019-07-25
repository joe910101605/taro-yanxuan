import {SEARCH_LIST} from '@constants/search'
import {API_SEARCH} from '@constants/api'
import { createAction } from '@utils/redux'

/**
 * 购物车信息
 * @param {*} payload
 */
export const dispatchSearch = payload => createAction({
  url: API_SEARCH,
  type: SEARCH_LIST,
  payload
})
