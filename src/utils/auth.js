//import Cookies from 'js-cookie'
const cookies = {
	//获取cookie、
	get: (name) =>{
		var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
		if (arr = document.cookie.match(reg))
			return (arr[2]);
		else
			return null;
	},
	set: (c_name, value, expiredays) => {
		var exdate = new Date();　　　　
		exdate.setDate(exdate.getDate() + expiredays);　　　　
		document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
	},
	del: (name) => {
		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		var cval = getCookie(name);
		if (cval != null)
			document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
	}
}

const TokenKey = 'Admin-Token'

export function getToken() {
  return cookies.get(TokenKey)
}

export function setToken(token) {
  return cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.del(TokenKey)
}
