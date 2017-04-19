// pages/ticket/selectcity/selectcity.js
Page({
  data:{
    citys:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    wx.showLoading({
      title:"加载中..."
    })
    wx.request({
      url: 'https://api-m.mtime.cn/Showtime/HotCitiesByCinema.api',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        wx.hideLoading()
        that.setData({
          citys:res.data.p
        })
      },
      fail: function(res) {
        // fail
        wx.hideLoading()
      },
      complete: function(res) {
        // complete
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  bindItemTap:function(event){
    // 点击Item
    var city = event.target.dataset.city
    console.log(city)
    wx.setStorage({
      key: 'selectcity',
      data: city
    })
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
    })
  }
})