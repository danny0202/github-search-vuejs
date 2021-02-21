<template>
  <div>
    <Pagination
      v-if="pageable.canLoadAnyPage()"
      :pageable="pageable"
      @go-to-page="loadPage($event)"
    />
    <AllReposList type="all" />
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
import { FETCH_ALL_REPOS } from '../store/actions.type';

export default {
  components: {
    AllReposList,
    Pagination,
  },
  mounted() {
    this.loadPage(this.pageable.firstPageId);
  },
  computed: {
    pageable() {
      return this.$store.state.all.pageable;
    },
  },
  methods: {
    loadPage(pageId) {
      this.$store.dispatch(`all/${FETCH_ALL_REPOS}`, pageId);
    },
  },
};
</script>
