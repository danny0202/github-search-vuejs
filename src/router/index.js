import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import RepoDetails from '../views/RepoDetails.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: '',
    component: Home,
    children: [
      {
        path: '',
        name: 'search',
        component: () => import('../views/SearchRepos'),
      },
      {
        path: 'all',
        name: 'all',
        component: () => import('../views/AllRepos'),
      },
      {
        path: 'starred',
        name: 'starred',
        component: () => import('../views/StarredRepos'),
      },
    ],
  },
  {
    name: 'repo',
    path: '/repo/:owner/:repo',
    component: RepoDetails,
    props: true,
  },
  {
    name: 'github',
    path: '/github',
    // eslint-disable-next-line no-restricted-globals
    beforeEnter() { location.href = 'http://github.com'; },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
