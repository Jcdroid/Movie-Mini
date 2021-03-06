// pages/hotshow/hotshow.js
Page({
  data:{
    list:[]
    },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    wx.showLoading({
      title:"加载中..."
    })
    this.loadData()
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
  onPullDownRefresh(){
    this.loadData()
  },
  loadData:function(){
    var that = this
    wx.request({
      url: 'https://api-m.mtime.cn/Showtime/LocationMovies.api?locationId=366',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        wx.hideLoading()
        var ms = res.data.ms
        console.log(ms)
        that.setData({
          list: ms
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
  }
})