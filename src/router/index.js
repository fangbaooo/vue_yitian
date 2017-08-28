import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/page/index';
import noviceGuide from '@/page/noviceGuide/noviceGuide';
import ylcHome from '@/page/ylcHome';
import loan from '@/page/loan';

import account from '@/page/account/account';  // 个人中心
/* 我的账户 */ 
import home from '@/page/account/home/home';
import dealRecord from '@/page/account/dealRecord/dealRecord';
 /* 我的奖励 */ 
import couponsList from '@/page/account/reward/couponsList';
import cashRecord from '@/page/account/reward/cashRecord';
import rewardRecord from '@/page/account/reward/rewardRecord';  

import safeCenter from '@/page/account/safeCenter/safeCenter';  // 安全中心

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
          path: '/account/home/dealRecord',
          component: dealRecord
        },
        {
          path: '/account/reward',
          redirect: '/account/reward/couponsList',
        },
        {
          path: '/account/reward/couponsList',
          component: couponsList
        },
        {
          path: '/account/reward/cashRecord',
          component: cashRecord
        },
        {
          path: '/account/reward/rewardRecord',
          component: rewardRecord
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
