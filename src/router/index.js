import Vue from 'vue';
import Router from 'vue-router';

import Login from '../views/Login.vue';
import Career from '../views/Career.vue';
import Home from '../views/Home.vue';

Vue.use(Router);
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/careers',
      name: 'Career',
      component: Career
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
});
