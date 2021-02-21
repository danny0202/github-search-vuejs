import Vue from 'vue';
import Vuex from 'vuex';

import globalModule from './global.module';
import allRepositoriesModule from './all-repositories.module';
import searchModule from './search.module';
import repoDetailsModule from './repo-details.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    global: globalModule,
    all: allRepositoriesModule,
    search: searchModule,
    details: repoDetailsModule,
  },
});
