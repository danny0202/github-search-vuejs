import ApiService from '../common/api.service';
import router from '../router';
import { SEARCH_REPOS } from './actions.type';
import { Pageable } from './model/pageable';

const sortOptions = [
  {
    id: 0,
    label: 'Best match',
    sort: null,
    order: null,
  },
  {
    id: 1,
    label: 'Most stars',
    sort: 'stars',
    order: 'desc',
  },
  {
    id: 2,
    label: 'Fewest stars',
    sort: 'stars',
    order: 'asc',
  },
  {
    id: 3,
    label: 'Most forks',
    sort: 'forks',
    order: 'desc',
  },
  {
    id: 4,
    label: 'Fewest forks',
    sort: 'forks',
    order: 'asc',
  },
  {
    id: 5,
    label: 'Recently updated',
    sort: 'updated',
    order: 'desc',
  },
];

const state = {
  repos: [],
  isLoading: false,
  pageable: new Pageable(),
  sortOptions,
};

const actions = {
  async [SEARCH_REPOS](context, { pageId, query, sortOption }) {
    context.commit('setLoading');
    if (router.currentRoute.path !== '/') {
      await router.push('./');
    }
    try {
      const request = pageId == null
        ? ApiService.searchRepositories(query, sortOption?.sort, sortOption?.order)
        : ApiService.getSearchRepositoriesPage(pageId);
      const {
        repositories, firstPageId, previousPageId, nextPageId,
      } = await request;
      const repos = repositories || [];
      context.commit('setRepos', {
        repos,
        pageable: new Pageable(firstPageId, previousPageId, nextPageId),
      });
    } catch (error) {
      throw new Error(error);
    }
  },
};

const mutations = {
  setLoading(_state) {
    _state.isLoading = true;
  },
  setRepos(_state, { repos, pageable }) {
    _state.repos = repos;
    _state.pageable = pageable;
    _state.isLoading = false;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
