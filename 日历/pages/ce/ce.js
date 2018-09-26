// pages/ce/ce.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false
  },
  tap(){
    this.setData({show:!this.data.show});
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
   onLoad(options) {
    console.log(1);
    // this.b();
    // console.log(this.ab);
    console.log(2);
    // wx.request({
    //   url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx5b1d591acdfb2772&secret=ca90f43b4d154994eb1c84ff394196fa',
    //   success(res0){
    //     console.log(res0.data.access_token);
    //     wx.request({
    //       url: 'https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token='+res0.data.access_token,
    //       method:'POST',
    //       data:{
    //         page:'page/index/index',
    //         scene:''
    //       },
    //       header:{
    //         // 'content-type':'application/x-www-form-urlencoded'
    //       },
    //       success(res) {
    //         console.log(res);
    //       },
    //       fail(res) {
    //         console.log(res);
    //       }
    //     })
    //   }
    // })
     
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})