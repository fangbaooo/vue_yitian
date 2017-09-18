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
    { path: '/account',  component: account, redirect: '/account/home',// 个人中心
      children: [
        { path: '/account/home', component: home, meta: {title: '账户总览'}},
        { path: '/account/home/recharge', component: recharge, meta: {title: '充值'}},
        { path: '/account/home/withdrawal', component: withdrawal, meta: {title: '提现'}},
        { path: '/account/home/dealRecord', component: dealRecord, meta: {title: '交易记录'}},
        { path: '/account/myInvest', redirect: '/account/myInvest/investRecord'},
        { path: '/account/myInvest/investRecord', component: investRecord, meta: {title: '我的投资'}},
        { path: '/account/myInvest/investBill', component: investBill, meta: {title: '投资记录'}},
        { path: '/account/bankCard', component: bankCard, meta: {title: '银行卡'}},
        { path: '/account/reward', redirect: '/account/reward/couponsList'},
        { path: '/account/reward/couponsList', component: couponsList, meta: {title: '我的奖励'}},
        { path: '/account/reward/cashRecord', component: cashRecord, meta: {title: '我的奖励'}},
        { path: '/account/reward/rewardRecord', component: rewardRecord, meta: {title: '我的奖励'}},
        { path: '/account/safeCenter', component: safeCenter, meta: {title: '安全中心'}}, 
        { path: '/account/spread', redirect: '/account/spread/spreadLink', meta: {title: '我的推广'}},
        { path: '/account/spread/spreadLink', component: spreadLink, meta: {title: '我的推广'}},
        { path: '/account/spread/spreadUser', component: spreadUser, meta: {title: '我的推广'}}
      ]
    },
    { path: '/help', component: help},
    { path: '/aboutUs', component: aboutUs, redirect: '/aboutUs/aboutCompany', // 关于我们
      children: [
        { path: '/aboutUs/aboutCompany', component: aboutCompany, meta: {title: '公司简介'}},
        { path: '/aboutUs/partner', component: partner, meta: {title: '合作伙伴'}},
        { path: '/aboutUs/team', component: team, meta: {title: '公司简介'}},
        { path: '/aboutUs/notice', component: notice, meta: {title: '团队风采'}},
        { path: '/aboutUs/dynamic', component: dynamic, meta: {title: '平台动态'}},
        { path: '/aboutUs/news', component: news, meta: {title: '行业资讯'}}, 
        { path: '/aboutUs/recruit', component: recruit, meta: {title: '招聘'}},
        { path: '/aboutUs/contact', component: contact, meta: {title: '联系我们'}},
      ]
    },
    { path: '/newsDetail/:id', name:'newsDetail', component: newsDetail, meta: {title: '新闻详情页'}},
    { path: '/ylcHome/ylcDetail/:id', name:'ylcDetail', component: ylcDetail, meta: {title: '益理财投资详情页'}},
    {
      path: '*',
      redirect: '/'
    }
  ]
});


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
};

route.beforeEach((to, from, next) => {
  typeof to.meta.title !== undefined && setDocumentTitle(to.meta.title);
  next();
});

export default route;
