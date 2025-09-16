Page({
  data: {
    age: 25,
    gender: "男",
  },
  onLoad() {
    console.log("个人页已加载");
  },
  onShow() {
    console.log("个人页显示");
  },
  updateAge(newAge) {
    this.setData({ age: newAge });
  },
  goAccount() {
    wx.switchTab({
      url: "/pages/account/account",
    });
  },
  goSetting() {
    wx.switchTab({
      url: "/pages/setting/setting",
    });
  },
});
