import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/page/index';
import noviceGuide from '@/page/noviceGuide/noviceGuide';
import ylcHome from '@/page/ylcHome';
import loan from '@/page/loan';
import safeguard from '@/page/safeguard';
import login from '@/page/register/login';
import register from '@/page/register/register';
import appdl from '@/page/appdl/appdl';  // 手机客户端

import account from '@/page/account/account';  // 个人中心
/* 我的账户 */ 
import home from '@/page/account/home/home';
import recharge from '@/page/account/home/recharge';
import withdrawal from '@/page/account/home/withdrawal';
import dealRecord from '@/page/account/dealRecord/dealRecord';

 /* 我的投资 */ 
import investRecord from '@/page/account/myInvest/investRecord';
import investBill from '@/page/account/myInvest/investBill';
 /* 我的奖励 */ 
import couponsList from '@/page/account/reward/couponsList';
import cashRecord from '@/page/account/reward/cashRecord';
import rewardRecord from '@/page/account/reward/rewardRecord';  

import safeCenter from '@/page/account/safeCenter/safeCenter';  // 安全中心
import bankCard from '@/page/account/bankCard/bankCard';  // 我的银行卡

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

import ylcDetail from '@/page/detail/ylcDetail';
Vue.use(Router);

const route =  new Router({
	mode: "history",
  routes: [
    { path: '/', component: Index, meta: {title: '益田理财'}},
    { path: '/ylcHome', component: ylcHome, meta: {title: '益理财'}},          // component: (reslove) => require([ylcHome], reslove)
    { path: '/loan', component: loan, meta: {title: '我要借款'}},               
    { path: '/noviceGuide', component: noviceGuide, meta: {title: '新手指南'}}, 
    { path: '/safeguard', component: safeguard, meta: {title: '安全保障'}},    
    { path: '/login', component: login, meta: {title: '登录'}},            
    { path: '/register', component: register, meta: {title: '注册'}},     
    { path: '/appdl', component: appdl, meta: {title: '手机客户端'}},     
    { path: '/account',  component: account, redirect: '/account/home',// 个人中心
      children: [
        { path: 'home', component: home, meta: {title: '账户总览'}},
        { path: 'home/recharge', component: recharge, meta: {title: '充值'}},
        { path: 'home/withdrawal', component: withdrawal, meta: {title: '提现'}},
        { path: 'home/dealRecord', component: dealRecord, meta: {title: '交易记录'}},
        { path: 'myInvest', redirect: 'myInvest/investRecord'},
        { path: 'myInvest/investRecord', component: investRecord, meta: {title: '我的投资'}},
        { path: 'myInvest/investBill', component: investBill, meta: {title: '投资记录'}},
        { path: 'bankCard', component: bankCard, meta: {title: '银行卡'}},
        { path: 'reward', redirect: 'reward/couponsList'},
        { path: 'reward/couponsList', component: couponsList, meta: {title: '我的奖励'}},
        { path: 'reward/cashRecord', component: cashRecord, meta: {title: '我的奖励'}},
        { path: 'reward/rewardRecord', component: rewardRecord, meta: {title: '我的奖励'}},
        { path: 'safeCenter', component: safeCenter, meta: {title: '安全中心'}}, 
        { path: 'spread', redirect: 'spread/spreadLink', meta: {title: '我的推广'}},
        { path: 'spread/spreadLink', component: spreadLink, meta: {title: '我的推广'}},
        { path: 'spread/spreadUser', component: spreadUser, meta: {title: '我的推广'}}
      ]
    },
    { path: '/help', component: help, meta: {title: '帮助中心'}},
    { path: '/aboutUs', component: aboutUs, redirect: '/aboutUs/aboutCompany', // 关于我们
      children: [
        { path: 'aboutCompany', component: aboutCompany, meta: {title: '公司简介'}},
        { path: 'partner', component: partner, meta: {title: '合作伙伴'}},
        { path: 'team', component: team, meta: {title: '公司简介'}},
        { path: 'notice', component: news, meta: {title: '团队风采'}},
        { path: 'dynamic', component: news, meta: {title: '平台动态'}},
        { path: 'news', component: news, meta: {title: '行业资讯'}}, 
        { path: 'recruit', component: recruit, meta: {title: '招聘'}},
        { path: 'contact', component: contact, meta: {title: '联系我们'}},
      ]
    },
    { path: '/newsDetail', name:'newsDetail', component: newsDetail, meta: {title: '新闻详情页'}},
    { path: '/ylcHome/ylcDetail/:id', name:'ylcDetail', component: ylcDetail, meta: {title: '益理财投资详情页'}},
    {
      path: '*',
      redirect: '/'
    }
  ]
});
export default route;
