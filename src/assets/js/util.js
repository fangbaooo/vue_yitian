
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
  if(result.indexOf(".") == -1) { 
    result +=  ".00";
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
  } //返回json格式
}