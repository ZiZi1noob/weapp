Page({
  data: {
    username: "用户A",
    balance: 1000,
  },
  onLoad() {
    console.log("账户页已加载");
  },
  onShow() {
    console.log("账户页显示");
  },
  updateBalance(amount) {
    this.setData({ balance: this.data.balance + amount });
  },

  goUser() {
    wx.switchTab({
      url: "/pages/user/user",
    });
  },
  goSetting() {
    wx.switchTab({
      url: "/pages/setting/setting",
    });
  },
});
