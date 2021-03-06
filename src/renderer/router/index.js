import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'landing-page',
    //   component: require('@/components/LandingPage').default,
    // },
    {
      path: '/',
      name: 'machine-settings',
      component: require('@/views/machine-settings').default,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
