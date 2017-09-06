import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/page/index';
import noviceGuide from '@/page/noviceGuide/noviceGuide';
import ylcHome from '@/page/ylcHome';
import loan from '@/page/loan';
import safeguard from '@/page/safeguard';
import login from '@/page/register/login';
import register from '@/page/register/register';

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

 /* 帮助中心 */ 
import help from '@/page/help'; 
import aboutUs from '@/page/aboutUs/aboutUs';
import aboutCompany from '@/page/aboutUs/aboutCompany';
import partner from '@/page/aboutUs/partner';
import team from '@/page/aboutUs/team';
import notice from '@/page/aboutUs/notice';
import dynamic from '@/page/aboutUs/dynamic';
import news from '@/page/aboutUs/news';
import recruit from '@/page/aboutUs/recruit';
import contact from '@/page/aboutUs/contact';
import newsDetail from '@/page/newsDetail';

Vue.use(Router);

export default new Router({
	mode: "history",
  routes: [
    { path: '/', component: Index},
    { path: '/ylcHome', component: ylcHome},          // 益理财
    { path: '/loan', component: loan},                // 我要借款
    { path: '/noviceGuide', component: noviceGuide},  // 新手指南
    { path: '/safeguard', component: safeguard},      // 安全保障
    { path: '/login', component: login},              // 登录
    { path: '/register', component: register},        // 注册
    { path: '/account',  component: account, redirect: '/account/home',// 个人中心
      children: [
        { path: '/account/home', component: home},  // 账户总览
        { path: '/account/home/recharge', component: recharge},  // 充值
        { path: '/account/home/withdrawal', component: withdrawal},  // 提现
        { path: '/account/home/dealRecord', component: dealRecord},  // 交易记录
        { path: '/account/myInvest', redirect: '/account/myInvest/investRecord'},   // 我的投资
        { path: '/account/myInvest/investRecord', component: investRecord},
        { path: '/account/myInvest/investBill', component: investBill},  //投资记录
        { path: '/account/bankCard', component: bankCard},    // 银行卡
        { path: '/account/reward', redirect: '/account/reward/couponsList'},  // 我的奖励
        { path: '/account/reward/couponsList', component: couponsList},
        { path: '/account/reward/cashRecord', component: cashRecord},
        { path: '/account/reward/rewardRecord', component: rewardRecord},
        { path: '/account/safeCenter', component: safeCenter},  // 安全中心
        { path: '/account/spread', redirect: '/account/spread/spreadLink'},   // 我的推广
        { path: '/account/spread/spreadLink', component: spreadLink},
        { path: '/account/spread/spreadUser', component: spreadUser}
      ]
    },
    { path: '/help', component: help},
    { path: '/aboutUs', component: aboutUs, redirect: '/aboutUs/aboutCompany', // 关于我们
      children: [
        { path: '/aboutUs/aboutCompany', component: aboutCompany},  // 公司简介
        { path: '/aboutUs/partner', component: partner}, // 合作伙伴
        { path: '/aboutUs/team', component: team}, // 公司简介
        { path: '/aboutUs/notice', component: notice}, // 团队风采
        { path: '/aboutUs/dynamic', component: dynamic}, // 平台动态
        { path: '/aboutUs/news', component: news},  // 行业资讯
        { path: '/aboutUs/recruit', component: recruit}, // 招聘
        { path: '/aboutUs/contact', component: contact},  // 联系我们
        
      ]
    },
    { path: '/newsDetail/:id', name:'newsDetail', component: newsDetail},  // 新闻详情页
    {
      path: '*',
      redirect: '/'
    }
  ]
});
