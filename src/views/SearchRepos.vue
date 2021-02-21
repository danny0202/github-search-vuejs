<template>
  <div>
    <Pagination
      v-if="pageable.canLoadAnyPage()"
      :pageable="pageable"
      @go-to-page="loadPage($event)"
    />
    <AllReposList type="search" />
    <Pagination
      v-if="pageable.canLoadAnyPage()"
      :pageable="pageable"
      @go-to-page="loadPage($event)"
    />
  </div>
</template>
<script>
import AllReposList from '../components/AllReposList.vue';
import Pagination from '../components/Pagination.vue';
import { FETCH_SEARCH_REPOS_PAGE } from '../store/actions.type';

export default {
  components: {
    AllReposList,
    Pagination,
  },
  mounted() {
  },
  computed: {
    pageable() {
      return this.$store.state.search.pageable;
    },
  },
  methods: {
    loadPage(pageId) {
      this.$store.dispatch(`search/${FETCH_SEARCH_REPOS_PAGE}`, { pageId });
    },
  },
};
</script>
