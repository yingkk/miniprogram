Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentAreaId: "",
    currentAreaName: "",
    currentAreaDetail: {},
    areaDetail: [
      {
        id: "1",
        url: "../../images/area1.jpg",
        desc: "会画画的大象"
      },
      {
        id: "2",
        url: "../../images/area2.jpg",
        name: "大象",
        desc: "会画画的大象"
      },
      {
        id: "3",
        url: "../../images/area3.jpg",
        name: "大象",
        desc: "会画画的大象"
      },
      {
        id: "4",
        url: "../../images/area4.jpeg",
        name: "大象",
        desc: "会画画的大象"
      },
      {
        id: "5",
        url: "../../images/area5.jpg",
        name: "大象",
        desc: "会画画的大象"
      },
      {
        id: "6",
        url: "../../images/area6.jpeg",
        name: "大象",
        desc: "会画画的大象"
      },
      {
        id: "7",
        url: "../../images/area7.jpg",
        name: "大象",
        desc: "会画画的大象"
      },
      {
        id: "8",
        url: "../../images/area8.jpg",
        name: "大象",
        desc: "会画画的大象"
      },
      {
        id: "9",
        url: "../../images/area9.jpg",
        name: "大象",
        desc: "会画画的大象"
      },
      {
        id: "10",
        url: "../../images/area10.jpg",
        name: "大象",
        desc: "会画画的大象"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(option) {
    this.setData({
      currentAreaId: option.id,
      currentAreaName: option.name,
      currentAreaDetail: this.data.areaDetail.filter(item => item.id === option.id)[0],
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})