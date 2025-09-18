const zh = require("../i18n/zh.js");
const zhTW = require("../i18n/zh-TW.js");
const en = require("../i18n/en.js");

let locales = zh;
let currentLang = "zh";

function setLocale(lang) {
  if (lang === "zh") locales = zh;
  else if (lang === "zh-TW") locales = zhTW;
  else if (lang === "en") locales = en;
  currentLang = lang;
  wx.setStorageSync("language", lang);
}

function t(key) {
  return locales[key] || key;
}

module.exports = {
  setLocale,
  t,
};
