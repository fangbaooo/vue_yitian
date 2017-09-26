import Vue from 'vue';
import Router from 'vue-router';
const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router);

const route =  new Router({
  mode: "history",
  routes: [
    { path: '/', component: _import('index'), meta: {title: '益田理财'}},
    { path: '/ylcHome', component: _import('ylcHome'), meta: {title: '益理财'}},          // component: (reslove) => require([ylcHome], reslove)
    { path: '/loan', component: _import('loan') , meta: {title: '我要借款'}},               
    { path: '/noviceGuide', component: _import('noviceGuide/noviceGuide'), meta: {title: '新手指南'}}, 
    { path: '/safeguard', component: _import('safeguard'), meta: {title: '安全保障'}},    
    { path: '/login', component: _import('register/login'), meta: {title: '登录'}},            
    { path: '/register', component: _import('register/register'), meta: {title: '注册'}},     
    { path: '/appdl', component: _import('appdl/appdl'), meta: {title: '手机客户端'}},     
    { path: '/account',  component: _import('account/account'), redirect: '/account/home',// 个人中心
      children: [
        { path: 'home', component: _import('account/home/home'), meta: {title: '账户总览'}},
        { path: 'home/recharge', component: _import('account/home/recharge'), meta: {title: '充值'}},
        { path: 'home/withdrawal', component: _import('account/home/withdrawal'), meta: {title: '提现'}},
        { path: 'home/dealRecord', component: _import('account/dealRecord/dealRecord'), meta: {title: '交易记录'}},
        { path: 'myInvest', redirect: 'myInvest/investRecord'},
        { path: 'myInvest/investRecord', component: _import('account/myInvest/investRecord'), meta: {title: '我的投资'}},
        { path: 'myInvest/investBill', component: _import('account/myInvest/investBill'), meta: {title: '投资记录'}},
        { path: 'bankCard', component: _import('account/bankCard/bankCard'), meta: {title: '银行卡'}},
        { path: 'reward', redirect: 'reward/couponsList'},
        { path: 'reward/couponsList', component: _import('account/reward/couponsList'), meta: {title: '我的奖励'}},
        { path: 'reward/cashRecord', component: _import('account/reward/cashRecord'), meta: {title: '我的奖励'}},
        { path: 'reward/rewardRecord', component: _import('account/reward/rewardRecord'), meta: {title: '我的奖励'}},
        { path: 'safeCenter', component: _import('account/safeCenter/safeCenter'), meta: {title: '安全中心'}}, 
        { path: 'spread', redirect: 'spread/spreadLink', meta: {title: '我的推广'}},
        { path: 'spread/spreadLink', component: _import('account/spread/spreadLink'), meta: {title: '我的推广'}},
        { path: 'spread/spreadUser', component: _import('account/spread/spreadUser'), meta: {title: '我的推广'}}
      ]
    },
    { path: '/help', component: _import('help'), meta: {title: '帮助中心'}},
    { path: '/aboutUs', component: _import('aboutUs/aboutUs'), redirect: '/aboutUs/aboutCompany', // 关于我们
      children: [
        { path: 'aboutCompany', component: _import('aboutUs/aboutCompany'), meta: {title: '公司简介'}},
        { path: 'partner', component: _import('aboutUs/partner'), meta: {title: '合作伙伴'}},
        { path: 'team', component: _import('aboutUs/team'), meta: {title: '公司简介'}},
        { path: 'notice', component: _import('aboutUs/news'), meta: {title: '团队风采'}},
        { path: 'dynamic', component: _import('aboutUs/news'), meta: {title: '平台动态'}},
        { path: 'news', component: _import('aboutUs/news'), meta: {title: '行业资讯'}}, 
        { path: 'recruit', component: _import('aboutUs/recruit'), meta: {title: '招聘'}},
        { path: 'contact', component: _import('aboutUs/contact'), meta: {title: '联系我们'}},
      ]
    },
    { path: '/newsDetail', name:'newsDetail', component: _import('newsDetail'), meta: {title: '新闻详情页'}},
    { path: '/ylcHome/ylcDetail/:id', name:'ylcDetail', component: _import('detail/ylcDetail'), meta: {title: '益理财投资详情页'}},
    // {
    //   path: '*',
    //   redirect: '/'
    // }
  ]
});
export default route;
