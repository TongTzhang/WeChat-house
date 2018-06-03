// pages/beikeindex/beikeindex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allData:{},
    imageNum:0,
    selectType:0,
    typeData:{},
    typeId:1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTypeData();
    this.getData();
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
  
  },
  getData: function () {
    const that = this;
    wx.request({
      url:"http://47.93.220.17/Home/Bk/xinfang",
      method:"get",
      dataType:"json",
      success: function(res){
        that.setData({
          allData: res.data,
        }); 
        that.setData({
          imageNum: that.data.allData.data.house_info.images.length,
        }); 
      },
      fail: function(error){
        console.log("哇哦，没有取到数据哦!!!")
      },
    });
  },
  getTypeData: function () {
    const that = this;
    wx.request({
      url: "http://47.93.220.17/Home/Bk/getListsByType",
      method: "get",
      dataType: "json",
      data: {
        type_id: that.data.typeId,
      },
      success: function (res) {
        that.setData({
          typeData: res.data,
        });
      },
      fail: function (error) {
        console.log("哇哦，没有取到类型数据哦!!!")
      },
    });
  },
  bindType:function(i){
    const that = this;
    var index = i.currentTarget.dataset.index;
    that.data.typeId = i.currentTarget.dataset.id;
    that.setData({
      selectType: index,
    });
    that.getTypeData();
  },
})