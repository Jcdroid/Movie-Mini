// pages/ticket/detail/detail.js
var util = require('../../../utils/util.js')
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var movieId = options.movieId

    console.log("movieId = "+movieId)
    
    var that = this
    wx.showLoading({
      title:"加载中..."
    })
    wx.request({
      url: 'https://ticket-api-m.mtime.cn/movie/detail.api?locationId=366&movieId='+movieId,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        wx.hideLoading()
        var detail = res.data.data
        var basic = detail.basic
        var video = basic.video
        console.log(res.data.data.basic.name)
        that.setData({
          basic:basic,
          video:video
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
  bindPlay:function(){
    wx.navigateTo({
      url: 'play/play',
      success: function(res){
        // success
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  }
})