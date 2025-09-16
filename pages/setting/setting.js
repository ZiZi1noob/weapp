Page({
  data: {
    darkMode: true,
    language: "zh-CN",
  },
  onLoad() {
    console.log("设置页已加载");
  },
  onShow() {
    console.log("设置页显示");
  },
  toggleDarkMode() {
    this.setData({ darkMode: !this.data.darkMode });
  },
  changeLanguage(lang) {
    this.setData({ language: lang });
  },
  goAccount() {
    wx.switchTab({
      url: "/pages/account/account",
    });
  },
  goUser() {
    wx.switchTab({
      url: "/pages/user/user",
    });
  },
});
