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

// 过滤器
// 过滤货币 50000 -> 50,000.00
Vue.filter('currency', function (s, n) {
  n = n > 0 && n <= 20 ? n : 2;
  s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
  let l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];
  let t = "";
  for (let i = 0; i < l.length; i++) {
     t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
  }
  return t.split("").reverse().join("") + "." + r;
})

// 给手机号加*号 如：1352806987 -> 135*****987
Vue.filter('phone', function (value) {
  var firstNum = value.substring(0, 3)
  var lastNum = value.substring(8)
  return (firstNum + '*****' + lastNum);
})

// 设置页面标题  使用：<div v-title data-title="标题内容">
// Vue.directive('title', {
//   inserted: function (el, binding) {
//     document.title = el.dataset.title
//   }
// });