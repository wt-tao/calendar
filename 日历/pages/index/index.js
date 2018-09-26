//index.js
//获取应用实例
const app = getApp()
// const times=require('../../utils/runtime.js');
import regeneratorRuntime from '../../utils/req.js';
Page({
  data: {
    list: "11111222墙122哀21112111121水112111博22211章11212121111121心1热2朝211置22地111211腹11111121111111112111111111111",
    returnlist: "11111红杏出墙1喜怒哀乐111口1111莫1水11成111博大精深11章11推1于1火11111心1心1热火朝天11置之死地111经11腹111111地111111111义111111111111",
    daAn: "经红于出推天深死杏火心怒火口大成义莫乐精地之喜",
    listArr:[],
    guangbiao:0,
    a:[1,2,3]
  },
  listTap(e){
    let item=e.target.dataset.item;
    console.log(item);
    if(item==2){

    }
  },
  daAnTap(e){
    let item=e.target.dataset.item;
    console.log(item);
    for(let i=0;i<100;i++){
      // if(){}
    }
  },
  click(){
    console.log(+new Date());
    // let aa = getApp().globalData.aa;
    // let a = getApp().globalData.aa;
    // let ac = getApp().globalData.aa;
    // this.data.a[5]=12;
    // let aa=[];
    // let bb=[];
    // for(let i=0;i<this.data.a.length;i++){
    //   aa[i]=this.data.a[i];
    // }
    // for (let i = 0; i < 100; i++) {
    //   bb[i] = this.data.a[i];
    // }
    console.log(+new Date());
  },
   onLoad () {
    console.log('加载开始：++++', +new Date());
    wx.updateShareMenu({
      withShareTicket:true
    });
    let list=this.data.list.split('');
    this.setData({a:list});
    console.log(1);
    let that=this;
    // let aa=await that.aaa();
    // console.log(aa,this.aaa(),this.aab());
    // console.log(aa.data.ip);
    console.log(3);
    console.log(regeneratorRuntime);
    
  },
  async aaa(){
    // setTimeout(function(){
    //   console.log(2);
    //   return 2;
    // },2000);
    // return new Promise((resolve,reject)=>{
      wx.request({
        url: 'https://xyxcck-auth.raink.com.cn/MiniGame/data/getIp.action?gameId=3',
        success(res){
          // resolve(res);
          return res;
        }
      })
    // })
  },
  aab(){
    return new Promise((resolve,reject)=>{
    wx.request({
      url: 'https://xyxcck-auth.raink.com.cn/MiniGame/data/getIp.action?gameId=3',
      success(res) {
        resolve(res);
        // return res;
      }
    })
    })
  },
  onShow(){
    // for(let i=0;i<tlist){}
  },
  onReady(){
    console.log('加载完成：++++', +new Date());
  },
  onShareAppMessage: function (res) {
    return{
      title: "我已经闯过关，谁与我战？",
      path: 'pages/index/index',
      success: function (res) {
        console.log('12',res);
        wx.getShareInfo({
          shareTicket: res.shareTickets[0],
          success(res1){
            console.log(res1);
            wx.login({
              success(res2){
                console.log(res2);
                wx.request({
                  url: `https://api.weixin.qq.com/sns/jscode2session?appid=wx5b1d591acdfb2772&secret=f9fd1ccf0d0ab18c58fd22561cf9163b&js_code=${res2.code}&grant_type=authorization_code`,
                  success(res3){
                    console.log(res3);
                    wx.request({
                      url: `http://127.0.0.1:8888?app_id=wx5b1d591acdfb2772&session_key=${res3.data.session_key}&iv=${res1.iv}&encryptedData=${res1. encryptedData}`,
                      success(res4){
                        console.log(res4);
                      }
                    })
                  }
                })
              }
            })
          }
        })
      },fail(err){
        console.log(err);
      }
    }
  }
})
