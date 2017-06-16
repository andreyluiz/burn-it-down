import Vue from 'vue';
import Router from 'vue-router';
import Form from '@/components/Form';
import Chart from '@/components/Chart';
import Sprints from '@/components/Sprints';

Vue.use(Router);

export default new Router({
  history: true,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Form,
    },
    {
      path: '/chart',
      name: 'Chart',
      component: Chart,
    },
    {
      path: '/sprints',
      name: 'Sprints',
      component: Sprints,
    },
  ],
});
