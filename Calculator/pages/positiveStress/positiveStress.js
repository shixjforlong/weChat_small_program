// pages/positiveStress/positiveStress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      positiveStressOutput:"",//正应力计算结果
      axialForce:"",//轴力
      crossSectionArea:"",//横截面积
  },
  bindInputAxialForce: function (e) {
    this.setData({ axialForce: e.detail.value })
    this.positiveStressCalc();
    
  },
  bindInputCrossSectionArea: function (e) {
    this.setData({ crossSectionArea: e.detail.value })
    this.positiveStressCalc();
  },
  positiveStressCalc: function () {
    if(this.data.crossSectionArea){
      this.setData({
       positiveStressOutput:(this.data.axialForce / this.data.crossSectionArea).toFixed(1)
      })
    }
    
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