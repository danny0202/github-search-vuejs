import { TOGGLE_STARRED_REPO } from './actions.type';

const STARRED_REPOS_KEY = 'starred_repos';

const initialStarredRepos = localStorage.getItem(STARRED_REPOS_KEY);
const state = {
  starredRepos: initialStarredRepos ? JSON.parse(initialStarredRepos) : {},
};

const getters = {
  // eslint-disable-next-line
  isStarredRepo: (_state) => (repo) => _state.starredRepos.hasOwnProperty(repo.id),
  hasStarredRepos: (_state) => Object.keys(_state.starredRepos).length > 0,
};

const actions = {
  [TOGGLE_STARRED_REPO](context, repo) {
    context.commit('toggleStarredRepo', repo);
  },
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  toggleStarredRepo(_state, repo) {
    // eslint-disable-next-line
    const isStarred = getters.isStarredRepo(_state)(repo);
    if (isStarred) {
      delete _state.starredRepos[repo.id];
    } else {
      _state.starredRepos[repo.id] = repo;
    }
    // trigger change... :/
    _state.starredRepos = { ..._state.starredRepos };
    localStorage.setItem(STARRED_REPOS_KEY, JSON.stringify(_state.starredRepos));
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
