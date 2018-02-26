// pages/tensileStrength/tensileStrength.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     shaftDiameter:"",//轴径 d
     internalDiameter:"",//内径 d1
     wireDiameter:"",//线径 d2
     tensileStrengthOutput:""
  },
  bindInputShaftDiameter: function (e) {
    this.setData({ shaftDiameter: e.detail.value })
    this.compressionRatioCalc();
    
  },
  bindInputInternalDiameter: function (e) {
    this.setData({ internalDiameter: e.detail.value })
    this.compressionRatioCalc();
    
  },
  bindInputWireDiameter: function (e) {
    this.setData({ wireDiameter: e.detail.value })
    this.compressionRatioCalc();
    
  },
  compressionRatioCalc:function(){
    if(this.data.shaftDiameter && this.data.internalDiameter && this.data.wireDiameter){
      this.setData({
       tensileStrengthOutput:((this.data.shaftDiameter + this.data.wireDiameter)/ (this.data.internalDiameter + this.data.wireDiameter)).toFixed(3)
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