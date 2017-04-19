// pages/ticket/ticket.js
Page({
  data:{
    selectId:336,
    selectCity:"选择城市",
    list:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.loadData(this.data.selectId, true)
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    var that = this
    wx.getStorage({
      key: 'selectcity',
      success: function(res){
        // success
        var city = res.data
        var id = res.id
        var name = "当前城市："+city.n
        if(name != that.data.selectCity) {
          that.setData({
            selectId:id,
            selectCity:name
          })
          console.log(that.data.selectId)
          that.loadData(that.data.selectId, false)
        }
      }
    })
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  onPullDownRefresh:function(){
    this.loadData(this.data.selectId, false)
  },
  loadData:function(locationId, showLoading){
    if(showLoading) {
      wx.showLoading({
        title:"加载中..."
      })
    }
    var that = this
    wx.request({
      url: 'https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api?locationId='+locationId,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        wx.hideLoading()
        wx.stopPullDownRefresh()
        var movies = res.data.movies
        that.setData({
          list: movies
        })
      },
      fail: function(res) {
        // fail
        wx.hideLoading()
        wx.stopPullDownRefresh()
      },
      complete: function(res) {
        // complete
      }
    })
  }
})