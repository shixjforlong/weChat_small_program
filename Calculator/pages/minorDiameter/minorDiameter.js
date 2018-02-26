// pages/minorDiameter/minorDiameter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     nominalDiameter:"",//公称直径
     pitch:"",//螺距
     minorDiameterOutput:""//螺纹小径
  },
  bindInputNominalDiameter: function (e) {
    this.setData({ nominalDiameter: e.detail.value })
    this.compressionRatioCalc();
    
  },
  bindInputPitch: function (e) {
    this.setData({ pitch: e.detail.value })
    this.compressionRatioCalc();
    
  },
  compressionRatioCalc:function(){
    if(this.data.nominalDiameter && this.data.pitch){
      this.setData({
       minorDiameterOutput:(this.data.nominalDiameter - this.data.pitch*1.25*0.866025).toFixed(3)
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