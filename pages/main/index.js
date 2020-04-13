Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentLabel: "",
    currentDetail: {},
    mainDetail: [{
        label: "paint",
        title: "写生",
        description: "笔下的春天依旧春意盎然",
        address: "公园",
        tips: "提供画板支架",
        detail: {
          poster: "../../images/swiper1.jpeg",
          url: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
          text: "春意"
        },
        comments: [
          {
            userIcon: "../../images/area3.jpg",
            userName: "悦",
            level: 4,
            content: "好评！"
          }
        ]
      },
      {
        label: "nature",
        title: "自然",
        description: "带你领略不一样的自然风光",
        address: "花园",
        tips: "提供画板支架",
        detail: {
          poster: "../../images/swiper1.jpeg",
          url: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
          text: "春意"
        }
      }, {
        label: "travel",
        title: "郊游",
        description: "吃喝玩乐说走就走",
        address: "野外",
        tips: "",
        detail: {
          poster: "../../images/swiper1.jpeg",
          url: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
          text: "春意"
        }
      }, {
        label: "family",
        title: "亲子",
        description: "一家人的快乐时光",
        address: "公园",
        tips: "提供午餐",
        detail: {
          poster: "../../images/swiper1.jpeg",
          url: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a02010004004",
          text: "春意"
        }
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(option) {
    this.setData({
      currentLabel: option.currentLabel,
      currentDetail: this.data.mainDetail.filter(item => item.label === option.currentLabel)[0]
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