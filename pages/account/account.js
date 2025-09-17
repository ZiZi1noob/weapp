// pages/account/account.js
Page({
  /**
   * Page initial data
   */
  data: {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    calendarDays: [],
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    this.renderCalendar();
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {},

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {},

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {},

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {},

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {},

  /**
   * Called when page reach bottom
   */
  onReachBottom() {},

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {},
  renderCalendar() {
    const { year, month } = this.data;
    const firstDay = new Date(year, month - 1, 1).getDay();
    const daysInMonth = new Date(year, month, 0).getDate();
    let calendarDays = [];
    // 填充前置空白
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push({ day: "", profit: "" });
    }
    // 填充日期和收益
    for (let d = 1; d <= daysInMonth; d++) {
      calendarDays.push({
        day: d,
        profit: Math.floor(Math.random() * 200 - 100), // 示例收益
      });
    }
    this.setData({ calendarDays });
  },
  prevMonth() {
    let { year, month } = this.data;
    month--;
    if (month < 1) {
      month = 12;
      year--;
    }
    this.setData({ year, month }, this.renderCalendar);
  },
  nextMonth() {
    let { year, month } = this.data;
    month++;
    if (month > 12) {
      month = 1;
      year++;
    }
    this.setData({ year, month }, this.renderCalendar);
  },
});
