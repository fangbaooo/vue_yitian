import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/page/index';
import noviceGuide from '@/page/noviceGuide/noviceGuide';
import ylcHome from '@/page/ylcHome';
import loan from '@/page/loan';

import account from '@/page/account/account';  // 个人中心
/* 我的账户 */ 
import home from '@/page/account/home/home';
import recharge from '@/page/account/home/recharge';
import withdrawal from '@/page/account/home/withdrawal';
import dealRecord from '@/page/account/dealRecord/dealRecord';

import bankCard from '@/page/account/bankCard/bankCard';  // 安全中心
 /* 我的投资 */ 
import investRecord from '@/page/account/myInvest/investRecord';
import investBill from '@/page/account/myInvest/investBill';
 /* 我的奖励 */ 
import couponsList from '@/page/account/reward/couponsList';
import cashRecord from '@/page/account/reward/cashRecord';
import rewardRecord from '@/page/account/reward/rewardRecord';  

import safeCenter from '@/page/account/safeCenter/safeCenter';  // 安全中心

 /* 我的推广 */ 
import spreadLink from '@/page/account/spread/spreadLink';
import spreadUser from '@/page/account/spread/spreadUser';

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
      path: '/ylcHome',  // 益理财
      component: ylcHome
    },
    {
      path: '/loan', // 我要借款
      component: loan
    },
    {
      path: '/noviceGuide',  // 新手指南
      component: noviceGuide
    },
    {
      path: '/account',    // 个人中心
      component: account,
      redirect: '/account/home',
      children: [
        {
          path: '/account/home',  // 账户总览
          component: home
        },
        {
          path: '/account/home/recharge',  // 充值
          component: recharge
        },
        {
          path: '/account/home/withdrawal',  // 提现
          component: withdrawal
        },
        {
          path: '/account/home/dealRecord',  // 交易记录
          component: dealRecord
        },
        {
          path: '/account/myInvest',           // 我的投资
          redirect: '/account/myInvest/investRecord',
        },
        {
          path: '/account/myInvest/investRecord',  
          component: investRecord
        },
        {
          path: '/account/myInvest/investBill',  
          component: investBill
        },
        {
          path: '/account/bankCard',    // 银行卡
          component: bankCard
        },
        {
          path: '/account/reward',           // 我的奖励
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
        },
        {
          path: '/account/safeCenter',    // 安全中心
          component: safeCenter
        },
        {
          path: '/account/spread',        // 我的推广
          redirect: '/account/spread/spreadLink'
        },
        {
          path: '/account/spread/spreadLink',
          component: spreadLink
        },
        {
          path: '/account/spread/spreadUser',
          component: spreadUser
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
