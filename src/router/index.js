import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Sprint from '@/components/Sprint';
import Sprints from '@/components/Sprints';

Vue.use(Router);

export default new Router({
  history: true,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/chart',
      name: 'Sprint',
      component: Sprint,
    },
    {
      path: '/sprints',
      name: 'Sprints',
      component: Sprints,
    },
  ],
});
