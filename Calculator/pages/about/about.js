// pages/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowMorePage: false,
  },

  open: function () {
    wx.showModal({
      content: '打款失败，因为微信还没有向个人开发者开放支付接口；你的心意我们收下了，明年再来试试吧！',
      showCancel: false,
      success: function (res) {
        if (res.confirm) {
          //console.log('用户点击确定')
        }
      }
    });
  },

  bindInput: function (e) {
    this.setData({ isShowMorePage: e.detail.value })
    if (this.data.isShowMorePage == "open" || this.data.isShowMorePage == "close") {
      wx.setStorageSync("isShowMorePage", this.data.isShowMorePage == "open" ? true : false);

      wx.showModal({
        content: '咦？你好像发现了一个小秘密！ ^_^',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            //console.log('用户点击确定')
          }
        }
      });
    }
  },
})