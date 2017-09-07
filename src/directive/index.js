import Vue from 'vue'

Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
});
// 只能输入数字
Vue.directive('number', {
  update: function(el) {
    el.value = el.value.replace(/[^\d]/g,'');
  }
});
// 只能输入金额，保留两位小数, 如: 4444.05
Vue.directive('money', {
  update: function(el) {
    el.value = el.value.replace(/[^\d\.]/g, '').replace(/^\.+/, '').replace(/^(\d{1,18}(\.\d{0,2})?).*/, '$1').replace(/^0\d+/, '');
  }
});
// 大写字母提示
Vue.directive('capslock', {
  update: function(el) {
    var oTip = el.nextElementSibling || el.nextSibling; 
    if (/^[A-Z]+$/g.test(el.value)) {
        oTip.style.display = "block";
    } else {
        oTip.style.display = "none";
    }
  }
});