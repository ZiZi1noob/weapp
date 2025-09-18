const { setLocale, t } = require("../../utils/i18n.js");

Page({
  data: {
    i18n: {},
    showCustomToast: false,
    toastText: "",
  },
  onLoad() {
    const lang = wx.getStorageSync("language") || "zh";
    setLocale(lang);
    this.setData({
      i18n: {
        language_setting: t("language_setting"),
        theme: t("theme"),
        privacy: t("privacy"),
        about_us: t("about_us"),
      },
    });
  },
  onCardTap(e) {
    const type = e.currentTarget.dataset.type;
    if (type === "language") {
      wx.showActionSheet({
        itemList: ["简体中文", "繁體中文", "English"],
        success: (res) => {
          let lang = "zh";
          if (res.tapIndex === 1) lang = "zh-TW";
          if (res.tapIndex === 2) lang = "en";
          setLocale(lang);
          this.setData({
            i18n: {
              language_setting: t("language_setting"),
              theme: t("theme"),
              privacy: t("privacy"),
              about_us: t("about_us"),
            },
            showCustomToast: true,
            toastText: t("language_switch_success"),
          });
          setTimeout(() => {
            this.setData({ showCustomToast: false });
          }, 2000);
        },
      });
    }
  },
});
