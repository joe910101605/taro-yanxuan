import Taro, { Component } from '@tarojs/taro'
import { ButtonItem } from '@components'

// XXX 仅仅作为多端组件示例，实际只实现了邮箱登录
export default class AUth extends Component {
  agreeAuth = () => {
    Taro.login({
      success: function(res) {
        console.log(res);
        if (res.code) {
          //用户登录凭证（有效期五分钟）。开发者需要在开发者服务器后台调用 api，使用 code 换取 openid 和 session_key 等信息
          // https://api.weixin.qq.com/sns/jscode2session?appid=wx06c59f9986f41f98&secret=2b12230524b29014cad94f69e5402da7&js_code=021kzKzH1IgC420YglAH1LwZzH1kzKzJ&grant_type=authorization_code
          // Taro.navigateTo({
          //   url: '/pages/user-login-email/user-login-email'
          // })
          Taro.request({
            url:'http://localhost:8001/api/user/welogin',
            method:'get',
            data:{
              code:res.code,
            },
            header: {
             'content-type':  'application/json'
            }
          }).then(json => {
            let cookies = json.header['Set-Cookie'].replace(/,/g, ';')
            console.log('=======', cookies)
            Taro.setStorageSync('Cookies', cookies)
          })

        } else {
          console.log("登录失败！" + res.errMsg);
        }
      }
    });


    // Taro.getUserInfo().then((res) => {
    //   const { errMsg, userInfo } = res
    //   if (errMsg === 'getUserInfo:ok') {
    //     console.log(res)
    //     //https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html
    //     Taro.showToast({
    //       title: `微信昵称: ${userInfo.nickName}，请使用邮箱登录`,
    //       icon: 'none'
    //     })
    //   } else {
    //     Taro.showToast({
    //       title: '授权失败',
    //       icon: 'none'
    //     })
    //   }
    // })
  }

  render () {
    return (
      <ButtonItem
        type='primary'
        text='微信登录'
        openType='getUserInfo'
        onGetUserInfo={this.agreeAuth}
      />
    )
  }
}
