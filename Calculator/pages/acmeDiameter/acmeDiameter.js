// pages/acmeDiameter/acmeDiameter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     commonVar1:"0.508",
     commonVar2:"0.6",
     commonVar3:"3.175",
     nominalDiameter:"",
     diameterBigOutput:"",//内螺纹大径
     diameterSmallOutput:"",//内螺纹小径
     wdiameterBigOutput:"",//外螺纹大径
     wdiameterSmallOutput:""//外螺纹小径
  },
  bindInputNominalDiameter: function (e) {
    this.setData({ nominalDiameter: e.detail.value })
    this.compressionRatioCalc();
    
  },
  compressionRatioCalc:function(){
    if(this.data.nominalDiameter){
      this.setData({
        diameterBigOutput:(this.data.nominalDiameter + this.data.commonVar1)
      })
      this.setData({
        diameterSmallOutput:(this.data.nominalDiameter - this.data.commonVar2 * this.data.commonVar3).toFixed(3)
      })
      this.setData({
        wdiameterBigOutput:this.data.nominalDiameter
      })
      this.setData({
        wdiameterSmallOutput:(this.data.nominalDiameter - this.data.commonVar2 * this.data.commonVar3-this.data.commonVar1).toFixed(3)
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