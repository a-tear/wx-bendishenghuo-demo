var api = require("../../utils/api")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList: [],
    icons: []
  },
  // 获取轮播数据
  getBanner() {
    //调用封装的方法，为了方便我直接在页面加载的时候执行这个方法
    api.getData('/slides', null, res => {
      this.setData({
        bannerList: res.data
      })
      console.log(res)
    });
  },
  // 获取九宫格数据
  geticons() {
    api.getData('/categories', null, res => {
      this.setData({
        icons: res.data
      })
      console.log(res)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBanner();
    this.geticons()
  },
  // shuffleSuc: function (data) {
  //   var that = this;
  //   that.setData({
  //     bannerList: data
  //   })
  //   //我后面测试了一下，直接this.setData也可以，但是因为我在没有使用封装方法的时候
  //   //this.setData报过错，不能直接用this，所以我在赋值的时候一般都会加上var that = this;
  //   //这句话算是一个不是习惯的习惯
  // },
  // fail: function () {
  //   console.log("失败")
  // },
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