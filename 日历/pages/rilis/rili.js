// pages/rili/rili.js
const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 0; i < 24; i++) {
  months.push(i)
}

for (let i = 1; i <= 60; i++) {
  days.push(i)
}


Page({

  /**
   * 页面的初始数据
   */
  data: {
    week: ['sun', 'mon', 'tues', 'wed', 'ther', 'fir', 'sat'],
    dateArr:[],
    today:0,
    currentYear:2018,
    currentMonth:8,
    currentDate:0,
    swiperIndex:1,
    dates:[],
    monthEnglish:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    addActivity: false,
    titleValue: '',
    activityContent: '',
    dateValue: '2018-09-06',
    typeData: ['纪念日', '纪念日1'],
    typeValue: 0,
    privacyData: ['双方可见', '仅自己可见'],
    privacyValue: 0,
    remindData: ['服务通知', '在线通知'],
    remindValue: 0,
    startTime: '00:00',
    endTime: '00:00',
    show: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectData: ['全部', '纪念日'],//下拉列表的数据
    index: 0//选择的下拉列表下标
  },
  // 点击日历
  dateTap(e){
    let Index = e.currentTarget.dataset.index,
      Item = e.currentTarget.dataset.item;
    console.log(Index);
    console.log('当天的日期',this.data.dates[this.data.swiperIndex],'date:',Item.date);
    this.setData({
      today:Index+1
    });
  },
  // 点击添加事件
  addtap() {
    this.setData({
      addActivity: true
    });
  },
  // 点击下拉显示框
  selectTap() {
    this.setData({
      show: !this.data.show
    });
  },
  // 点击下拉列表
  optionTap(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index: Index,
      show: !this.data.show
    });
  },
  // 创建选择
  bindPickerChange(e) {
    console.log(e);
    let types = e.currentTarget.dataset.types;
    switch (types) {
      // 日期
      case 'date':
        this.setData({
          dateValue: e.detail.value
        });
        break;
      // 时间
      case 'time':
        this.timeScope.openTap();
        break;
      // 类型
      case 'type':
        this.setData({
          typeValue: e.detail.value
        });
        break;
      // 隐私
      case 'privacy':
        this.setData({
          privacyValue: e.detail.value
        });
        break;
      // 提醒
      case 'remind':
        this.setData({
          remindValue: e.detail.value
        });
        break;
    }
  },
  // 点击保存
  saveTap() {
    // this.timeScope.openTap();
    this.setData({
      addActivity: false
    });
    console.log(this.data.titleValue, this.data.activityContent, this.data.dateValue, this.data.typeData[this.data.typeValue], this.data.privacyData[this.data.privacyValue], this.data.remindData[this.data.remindValue], this.data.startTime, this.data.endTime);
  },
  timeComfirm(e) {
    console.log(e);
    this.setData({
      startTime: e.detail.timeData[0] + ':' + e.detail.timeData[1],
      endTime: e.detail.timeData[2] + ':' + e.detail.timeData[3],
      timeIndex: e.detail.timeIndex
    });
  },
  // 每月日期排列
  dataFn(data){
    let date=data||new Date();
    let dateArr=[];
    let yue = date.getMonth();
    let n = date.getFullYear();
    let r = date.getDate();
    let totalDay = this.dayNum({ month: yue, year:n});
    let lastMonthDay = new Date(n, yue, 0).getDate();
    
    console.log(yue);
    let firstDay = new Date(n, yue, 1).getDay();
    let lastDay = new Date(n, yue+1, 0).getDay();
    
    console.log(date.getFullYear() != new Date().getFullYear() , date.getMonth() != new Date().getMonth());
    
    console.log(totalDay, firstDay, lastDay, lastMonthDay);
    for(let i=1;i<43;i++){
      dateArr[i - 1]={};
      if (i <= firstDay){
        dateArr[i - 1].date = lastMonthDay - firstDay+i;
        dateArr[i - 1].bg='1'
      } else if (i > firstDay + totalDay){
        dateArr[i - 1].date = i - firstDay - totalDay;
        dateArr[i - 1].bg = '1'
      }else{
        dateArr[i - 1].date = i - firstDay;
        dateArr[i - 1].bg = '2'
      }
    }
    console.log(dateArr);
    // this.setData({ today});
    return dateArr;
    
  },
  swiperChange(e){
    console.log(e);
    let Index=e.detail.current;
    let swiperIndex = this.data.swiperIndex;
    
    this.setData({swiperIndex:Index})
    this.dateChange();
  },
  //
  dateChange(){
    let Index=this.data.swiperIndex;
    let currentYear = this.data.dates[Index].year,
        currentMonth = this.data.dates[Index].month;
    let dates=[{},{},{}];
    if(Index==0){

      dates[1].month=currentMonth+1;
      dates[1].year=currentYear;

      dates[2].month=currentMonth-1;
      dates[2].year=currentYear;

      dates[0].month=currentMonth;
      dates[0].year=currentYear;

    }else if(Index==1){

      dates[0].month=currentMonth-1;
      dates[0].year=currentYear;

      dates[2].month=currentMonth+1;
      dates[2].year=currentYear;

      dates[1].month=currentMonth;
      dates[1].year=currentYear;

    }else if(Index==2){
      dates[0].month=currentMonth+1;
      dates[0].year=currentYear;

      dates[1].month=currentMonth-1;
      dates[1].year=currentYear;

      dates[2].month=currentMonth;
      dates[2].year=currentYear;
    }
    // console.log('查看：',dates);
    for(let i=0;i<3;i++){
      if(dates[i].month>=12){
        dates[i].month=0;
        dates[i].year=dates[i].year+1;
      }
      if(dates[i].month<=-1){
        dates[i].month=11;
        dates[i].year=dates[i].year-1;
      }
    }    
    console.log('查看所有：',dates,Index);
    this.setData({dates});
    this.updateDate();
  },
  // 判断月份天数
  dayNum(data){
    // 400  4 !100
    data.month+=1;
    if (data.month == 2){
      if (data.year % 400 == 0 || (data.year % 4 == 0 && data.year % 100 != 0)) {
        data.day=29;
      }else{
        data.day = 28;
      }
    } else if (data.month == 1 || data.month == 3 || data.month == 5 || data.month == 7 || data.month == 8 || data.month == 10 || data.month == 12){
      data.day = 31;
    }else{
      data.day = 30;
    }
    return data.day;
  },
  // 更新三个月的日期
  updateDate(){
    let arr = [];
    let currentYear = this.data.currentYear,
        currentMonth = this.data.currentMonth,
        dates=this.data.dates;
    let dateAr =[new Date(dates[0].year, dates[0].month), new Date(dates[1].year, dates[1].month), new Date(dates[2].year, dates[2].month)];
    for (let i = 0; i < 3; i++) {
      arr[i] = this.dataFn(dateAr[i]);
    }
    console.log(arr);   
    let firstDay = new Date().getDay(); 
    let today = firstDay + new Date().getDate();
    let date = new Date(dates[this.data.swiperIndex].year, dates[this.data.swiperIndex].month);
    if (date.getFullYear() != new Date().getFullYear() || date.getMonth() != new Date().getMonth()) {
      today = -1;
    }
    this.setData({dateArr:arr,today});
  },
  onLoad: function (options) {
    let datesArr=[];
    for(let i=0;i<3;i++){
      datesArr[i]={};
      datesArr[i].year=new Date(new Date().getFullYear(), new Date().getMonth() + i-1).getFullYear();
      datesArr[i].month = new Date(new Date().getFullYear(), new Date().getMonth() + i - 1).getMonth();
    }
    this.setData({
      dates: datesArr
    });
    this.updateDate();

    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.timeScope = this.selectComponent('#timeScope');
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