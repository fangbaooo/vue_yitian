import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/page/index';
import noviceGuide from '@/page/noviceGuide/noviceGuide';
import ylcHome from '@/page/ylcHome';
import loan from '@/page/loan';

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
      path: '/help',
      component: help
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});
