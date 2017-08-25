import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/page/index';
import noviceGuide from '@/page/noviceGuide/noviceGuide';
import ylcHome from '@/page/ylcHome';
import loan from '@/page/loan';

import account from '@/page/account/account';  // 个人中心
import home from '@/page/account/home/home';
import dealRecord from '@/page/account/dealRecord/dealRecord';


import help from '@/page/help';
Vue.use(Router);

export default new Router({
	mode: "history",
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/ylcHome',
      component: ylcHome
    },
    {
      path: '/loan',
      component: loan
    },
    {
      path: '/noviceGuide',
      component: noviceGuide
    },
    {
      path: '/account',
      component: account,
      redirect: '/account/home',
      children: [
        {
          path: '/account/home',
          component: home
        },
        {
          path: '/account/dealRecord',
          component: dealRecord
        }
      ]
    },
    {
      path: '/help',
      component: help
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});
