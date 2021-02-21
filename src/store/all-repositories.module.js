import ApiService from '../common/api.service';
import { FETCH_ALL_REPOS } from './actions.type';
import { Pageable } from './model/pageable';

const state = {
  repos: [],
  isLoading: true,
  pageable: new Pageable(),
};

const actions = {
  async [FETCH_ALL_REPOS](context, pageablePageId) {
    context.commit('setLoading');
    try {
      const {
        repositories, canLoadFirst, canLoadPrevious, canLoadNext,
      } = await ApiService.repositoriesByCreatedAtInAscendingOrder(pageablePageId);
      const repos = repositories || [];
      context.commit('setRepos', {
        repos,
        pageable: new Pageable(
          canLoadFirst ? 0 : null,
          canLoadPrevious ? context.state.repos[0].id - 1 : null,
          canLoadNext ? repos[repos.length - 1].id : null,
        ),
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
