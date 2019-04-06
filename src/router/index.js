import Vue from 'vue'
import Router from 'vue-router'
// Import Views
import Login from '@/views/Login'

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/login', name: 'login', component: Login },
    // { path: '*', redirect: { name: 'home' } },
  ],
});