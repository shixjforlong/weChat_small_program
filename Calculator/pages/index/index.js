const app = getApp()

Page({
  data: {
    isShowMorePage: false
  },
  onLoad: function () {
    wx.showShareMenu({
      withShareTicket: true
    })

  },

  onShow(e) {
    this.setData({ isShowMorePage: wx.getStorageSync("isShowMorePage") })
  }
  
})