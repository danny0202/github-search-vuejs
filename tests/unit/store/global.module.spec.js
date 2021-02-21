import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import globalModule from '../../../src/store/global.module';
import { TOGGLE_STARRED_REPO } from '../../../src/store/actions.type';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('starAndUnstarFlow', () => {
  it('test', () => {
    createLocalVue()
      .use(Vuex);

    const store = new Vuex.Store({
      modules: {
        global: globalModule,
      },
    });

    const starredRepo = { id: 'repo-1' };

    // star repo.
    store.dispatch(TOGGLE_STARRED_REPO, starredRepo);
    // expecting it be stored.
    expect(store.state.global.starredRepos)
      .toEqual({ 'repo-1': starredRepo });

    // unstar previously starred repo.
    store.dispatch(TOGGLE_STARRED_REPO, starredRepo);
    // expecting it now be removed.
    expect(store.state.global.starredRepos)
      .toEqual({});

    // star two different repos.
    store.dispatch(TOGGLE_STARRED_REPO, { id: 'repo-2' });
    store.dispatch(TOGGLE_STARRED_REPO, { id: 'repo-3' });
    // expecting confirmation that newly starred repos are in fact starred...
    expect(store.getters.isStarredRepo({ id: 'repo-2' }))
      .toBeTruthy();
    expect(store.getters.isStarredRepo({ id: 'repo-3' }))
      .toBeTruthy();
    // ... and confirmation that previously unstarred repo is not...
    expect(store.getters.isStarredRepo({ id: 'repo-1' }))
      .toBeFalsy();

    // starred repos written to localStorage.
    expect(JSON.stringify(store.state.global.starredRepos))
      .toEqual(localStorage.getItem('starred_repos'));
  });
});
