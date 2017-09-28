import router from '../router'
import store from '../store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { getToken } from './auth' // 验权

const whiteList = ['/login']

// 兼容微信设置页面的title
let setDocumentTitle = function (title) {
    document.title = title;
    let ua = navigator.userAgent;
    if (/\bMicroMessenger\/([\d\.]+)/.test(ua) && /ip(hone|od|ad)/i.test(ua)) {
        var i = document.createElement('iframe');
        i.src = '/favicon.ico';
        i.style.display = 'none';
        i.onload = function () {
            setTimeout(function () {
                i.remove();
            }, 9);
        };
        document.body.appendChild(i);
    }
}

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (store.getters.roles.length === 0) {
        store.dispatch('GetInfo').then(res => {
          // const roles = res.data.role
          // store.dispatch('GenerateRoutes', { roles }).then(() => {
          //   router.addRoutes(store.getters.addRouters)
          //   next({ ...to })
          // })
          next()
        })
      } else {
        next()
      }
    }
  } else if (to.path.indexOf('/account') < 0) {
    next()
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach((to) => {
  typeof to.meta.title !== undefined && setDocumentTitle(to.meta.title);
  NProgress.done() // 结束Progress
})
