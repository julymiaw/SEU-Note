// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []  //从缓存中获取日志，获取失败则使用空数组
    logs.unshift(Date.now())                      //在数组开头插入当前时间
    wx.setStorageSync('logs', logs)               //把修改后的日志存入日志中

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },//到此为止，onlaunch程序结束
  globalData: {//存储全局变量，目前仅用户信息
    userInfo: null
  }
})
