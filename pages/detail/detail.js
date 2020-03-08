//Page Object
var api = require("../../utils/api")
Page({
    data: {
        shopsList: []
    },
    getShopsImg(options) {
        api.getData(`/shops/${options.cat}`, null, res => {
            console.log(res)
            this.setData({
                shopsList: res.data
            })
            wx.setNavigationBarTitle({
                title: res.data.name
            })
        })
    },
  previewHandle(e){
    console.log(e)
    wx.previewImage({
      current: e.target.dataset.src, // 当前显示图片的http链接
      urls: this.data.shopsList.images // 需要预览的图片http链接列表
    })
  },
    //options(Object)
    onLoad: function (options) {
        console.log(options)
        this.getShopsImg(options)
    },
    onReady: function () {

    },
    onShow: function () {

    },
    onHide: function () {

    },
    onUnload: function () {

    },
    onPullDownRefresh: function () {

    },
    onReachBottom: function () {

    },
    onShareAppMessage: function () {

    },
    onPageScroll: function () {

    },
    //item(index,pagePath,text)
    onTabItemTap: function (item) {

    }
});