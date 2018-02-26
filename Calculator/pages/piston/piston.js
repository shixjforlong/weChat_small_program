// pages/piston/piston.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bigDiameter:"",//活塞大径
    smallDiameter: "",//活塞小径,
    pistonAreaOutput:"",//活塞面积  计算结果
    liquidPressure:"",//液体压力
    pistonPressureOutput:"",//活塞力  计算结果
  },
  bindInputBigDiameter: function (e) {
    this.setData({ bigDiameter: e.detail.value })
    this.pistonAreaCalc();
  },
  bindInputSmallDiameter: function (e) {
    this.setData({ smallDiameter: e.detail.value })
    this.pistonAreaCalc();
  },
  pistonAreaCalc: function () {
    this.setData({
      pistonAreaOutput: (3.14 * (this.data.bigDiameter * this.data.bigDiameter - this.data.smallDiameter * this.data.smallDiameter) / 4).toFixed(1)})
    this.pistonPressCalc();
  },
  bindInputLiquidPressure: function (e) {
    this.setData({ liquidPressure: e.detail.value })
    this.pistonPressCalc();
  },
  pistonPressCalc: function () {
    this.setData({
      pistonPressureOutput:(this.data.liquidPressure *  this.data.pistonAreaOutput).toFixed(1)
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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