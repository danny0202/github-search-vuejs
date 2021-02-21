import ApiService from '../common/api.service';
import { FETCH_REPO_DETAILS } from './actions.type';

const state = {
  repo: {},
  isLoading: true,
};

const actions = {
  async [FETCH_REPO_DETAILS](context, { owner, repo }) {
    context.commit('setLoading');
    try {
      const repository = await ApiService.getRepositoryDetails(owner, repo);
      const repoDetails = repository || {};
      context.commit('setRepo', { repoDetails });
    } catch (error) {
      throw new Error(error);
    }
  },
};

const mutations = {
  setLoading(_state) {
    _state.isLoading = true;
  },
  setRepo(_state, { repoDetails }) {
    _state.repo = repoDetails;
    _state.isLoading = false;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
