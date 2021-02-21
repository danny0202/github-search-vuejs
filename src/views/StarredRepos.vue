<template>
  <div>
    <div v-if="!hasStarredRepos">No repos to show.</div>
    <RepoPreview v-for="repo in starredRepos" :repo="repo" :key="repo.id" />
  </div>
</template>
<script>
import RepoPreview from '../components/RepoPreview.vue';

export default {
  components: {
    RepoPreview,
  },
  computed: {
    starredRepos() {
      return this.$store.state.global.starredRepos;
    },
    hasStarredRepos() {
      return this.$store.getters.hasStarredRepos;
    },
  },
};
</script>
