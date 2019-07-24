/**
 * NOTE HOST、HOST_M 是在 config 中通过 defineConstants 配置的
 * 只所以不在代码中直接引用，是因为 eslint 会报 no-undef 的错误，因此用如下方式处理
 */
/* eslint-disable */
export const host = HOST
export const hostM = HOST_M
export const hostIMG=HOST_IMG
/* eslint-enable */

// pic
export const CDN = 'https://yanxuan.nosdn.127.net'

// home
export const API_HOME = `${host}/xhr/index/index.json`
export const API_HOME_BANNERIMAGES = `${host}/api/home/banner`
export const API_HOME_CATEGORIES = `${host}/api/category/list`
export const API_HOME_SEARCH_COUNT = `${host}/api/home/goodscount`
export const API_HOME_PIN = `${hostM}/pin/min/item/recommend.json`
export const API_HOME_RECOMMEND = `${host}/api/home/recommend`

// cate
export const API_CATE = `${host}/api/category/list`
export const API_CATE_SUB = `${host}/api/category/list`
export const API_CATE_SUB_LIST = `${host}/api/goods/list`

// cart
export const API_CART = `${host}/api/cart/list`
export const API_CART_NUM = `${host}/xhr/promotionCart/getMiniCartNum.json`
export const API_CART_RECOMMEND = `${host}/xhr/rcmd/cart.json`
export const API_CART_ADD = `${host}/api/cart/add`
export const API_CART_UPDATE = `${host}/api/cart/update`
export const API_CART_UPDATE_CHECK = `${host}/api/cart/updateCheck`

// user
export const API_USER = `${host}/api/user/curuser`
export const API_USER_LOGIN = `${host}/xhr/u/mailLogin.json`
export const API_CHECK_LOGIN = `${host}/xhr/u/checkLogin.json`

// item
export const API_ITEM = `${host}/api/goods/info`
export const API_ITEM_RECOMMEND = `${host}/xhr/rcmd/itemDetail.json`
