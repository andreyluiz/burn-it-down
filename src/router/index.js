import Vue from 'vue';
import Router from 'vue-router';
import Form from '@/components/Form';

Vue.use(Router);

export default new Router({
  history: true,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Form,
    },
  ],
});
