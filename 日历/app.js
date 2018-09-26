//app.js
import regeneratorRuntime from './utils/req.js';
App({
  async onLaunch(option) {
    console.log(option);
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    });
    console.log(1);
    let aa=await this.getuserInfo();
    console.log(aa);
    console.log(2);
   
  },
  getuserInfo(){
    return new Promise((resolve,reject)=>{
      wx.getUserInfo({
        success(res) {
          resolve(res);
        },
        fail(err){
          reject(err);
        }
      })
    });
  },
  globalData: {
    userInfo: null,
    aa:113
  }
})