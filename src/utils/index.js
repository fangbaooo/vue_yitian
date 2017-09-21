
/**
 * 金额用逗号隔开
 * @param s
 * @param n
 * @return
 */
export function fmoney(s, n) {
  n = n > 0 && n <= 20 ? n : 2;
  s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
  let l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];
  let t = "";
  for (let i = 0; i < l.length; i++) {
     t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
  }
  return t.split("").reverse().join("") + "." + r;
}

/**
 * 金额格式转化
 * @param money
 * @return
 */
export function amountFormat(money) {
  let result, money2;
  money2 = fmoney(money, 2);
  result = money2 + "";
  if (result.indexOf(".") == -1) {
    result += ".00";
  }
  return result;
}

export function getPosition(obj) {
  var left = 0;
  var top = 0;
  while (obj.offsetParent) //如果obj的有最近的父级定位元素就继续
  {
    left += obj.offsetLeft; //累加
    top += obj.offsetTop;
    obj = obj.offsetParent; //更新obj,继续判断新的obj是否还有父级定位，然后继续累加
  }
  return {
    left: left,
    top: top
  }
}

// 获取url地址中的参数
export function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var url = window.location.search.substr(1).match(reg);
  if (url != null) {
    return decodeURI(url[2]);
  }
  return null;
}

export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

 export function formatTime(time, option) {
   time = +time * 1000
   const d = new Date(time)
   const now = Date.now()

   const diff = (now - d) / 1000

   if (diff < 30) {
     return '刚刚'
   } else if (diff < 3600) { // less 1 hour
     return Math.ceil(diff / 60) + '分钟前'
   } else if (diff < 3600 * 24) {
     return Math.ceil(diff / 3600) + '小时前'
   } else if (diff < 3600 * 24 * 2) {
     return '1天前'
   }
   if (option) {
     return parseTime(time, option)
   } else {
     return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分'
   }
 }

// 修改系统alert弹窗方法
window.alert = function(str, time){
  var isAlert = document.getElementById("alertBox");
    if(isAlert){
        return;
    }
  var alertbox = document.createElement("div"),
    alertcon = document.createElement("span");
  alertbox.id = "alertBox";
  alertbox.className = "alert_box";
  alertcon.className = "alert_con";
  alertcon.innerHTML = str;
  document.body.appendChild(alertbox);
  alertbox.appendChild(alertcon);

  document.body.onselectstart = function() {
    return false;
  };
  var second = time ? time : 4000;
  var timeId = setTimeout(function() {
    alertbox.parentNode.removeChild(alertbox);
  }, second);
};
