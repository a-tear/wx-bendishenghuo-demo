var api = require("../../utils/api")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles: [],
    shopList: [],
    pageIndex: 0,
    pageSize: 20,
    totalCount: 0,
    hasMore: true
  },

  // 获取商铺信息
  getShops(options) {
    console.log(options)
    api.getData(`/categories/${options.cat}`, null, res => {
      this.setData({
        titles: res.data
      })
      wx.setNavigationBarTitle({
        title: res.data.name
      })
      console.log('标题', res)
      this.loadMore()
    })
  },
  // 下拉加载更多
  loadMore() {
    if (!this.data.hasMore) {
      return
    }
    var {
      pageIndex,
      pageSize
    } = this.data;
    var parmas = {
      _page: ++pageIndex,
      _limit: pageSize
    }
    console.log(this.data.titles)
    return api.getData(`/categories/${this.data.titles.id}/shops`, parmas, res => {
      console.log('商铺', res)
      console.log(this.data.titles.id)
      const totalCount = parseInt(res.header['X-Total-Count'])
      const hasMore = this.data.pageIndex * this.data.pageSize < totalCount
      const shops = this.data.shopList.concat(res.data)
      this.setData({
        shopList: shops,
        totalCount: totalCount,
        pageIndex: pageIndex,
        hasMore
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getShops(options)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.setData({
      shopList: [],
      pageIndex: 0,
      hasMore: true
    })
    this.loadMore(
      wx.stopPullDownRefresh()
    )
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadMore()
    console.log()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})