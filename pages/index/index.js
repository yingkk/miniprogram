//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    activedTag: "动物世界",
    selectedList: [],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    swiperList: [{
        url: "../../images/swiper1.jpeg",
        label: "paint"
      },
      {
        url: "../../images/swiper2.jpeg",
        label: "nature"
      },
      {
        url: "../../images/swiper3.jpg",
        label: "travel"
      },
      {
        url: "../../images/swiper4.jpg",
        label: "family"
      }
    ],
    hotList: [{
        url: "../../images/hot1.jpg",
        label: "野餐时光"
      },
      {
        url: "../../images/hot2.jpg",
        label: "镜中万物"
      },
      {
        url: "../../images/hot3.jpg",
        label: "云惊四意"
      },
      {
        url: "../../images/hot4.jpg",
        label: "欢乐亲子"
      }
    ],
    areaList: [{
        id: 1,
        url: "../../images/area1.jpg",
        label: "大象宝宝"
      },
      {
        id: 2,
        url: "../../images/area2.jpg",
        label: "牛大厨"
      },
      {
        id: 3,
        url: "../../images/area3.jpg",
        label: "小蓝狗"
      },
      {
        id: 4,
        url: "../../images/area4.jpeg",
        label: "喵咪"
      },
      {
        id: 5,
        url: "../../images/area5.jpg",
        label: "毛驴儿"
      },
      {
        id: 6,
        url: "../../images/area6.jpeg",
        label: "樱花树"
      },
      {
        id: 7,
        url: "../../images/area7.jpg",
        label: "红枫叶"
      },
      {
        id: 8,
        url: "../../images/area8.jpg",
        label: "苹果树"
      },
      {
        id: 9,
        url: "../../images/area9.jpg",
        label: "椰子树"
      },
      {
        id: 10,
        url: "../../images/area10.jpg",
        label: "竹子"
      }
    ],
    likeList: [{
        tag: "动物世界",
        itemList: [{
            url: "../../images/monkey.jpg",
            name: "猴子",
            eats: ["香蕉", "苹果", "蛋糕"],
            activity: "爬树",
            address: "野生动物馆"
          },
          {
            url: "../../images/monkey.jpg",
            name: "猴子",
            eats: ["香蕉", "苹果", "蛋糕"],
            activity: "爬树",
            address: "野生动物馆"
          },
          {
            url: "../../images/monkey.jpg",
            name: "猴子",
            eats: ["香蕉", "苹果", "蛋糕"],
            activity: "爬树",
            address: "野生动物馆"
          }
        ]
      },
      {
        tag: "植物王国",
        itemList: [{
            url: "../../images/tree.jpeg",
            name: "松树",
            eats: ["浇水", "施肥"],
            activity: "落叶",
            address: "植物馆"
          },
          {
            url: "../../images/tree.jpeg",
            name: "松树",
            eats: ["浇水", "施肥"],
            activity: "落叶",
            address: "植物馆"
          },
          {
            url: "../../images/tree.jpeg",
            name: "松树",
            eats: ["浇水", "施肥"],
            activity: "落叶",
            address: "植物馆"
          }
        ]
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    const _this = this;
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        selectedList: _this.data.likeList[0]["itemList"]
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
          selectedList: _this.data.likeList[0]["itemList"]
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
            selectedList: _this.data.likeList[0]["itemList"]
          })
        }
      })
    }
  },
  getUserInfo(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  chooseLike(e) {
    this.setData({
      activedTag: e.currentTarget.dataset.tag,
      selectedList: e.currentTarget.dataset.detail
    })
  },
  swiperClickHandler(e) {
    const currentLabel = e.currentTarget.dataset.label;
    wx.navigateTo({
      url: "../main/index?currentLabel=" + currentLabel,
    })
  },
  areaClickHandler(e) {
    const currentAreaId = e.currentTarget.dataset.id;
    const currentAreaName = e.currentTarget.dataset.name;
    wx.navigateTo({
      url: "../area/index?id=" + currentAreaId+ "&name=" +currentAreaName,
    })
  },
  scroll(e) {
    console.log("scroll");
  }
})