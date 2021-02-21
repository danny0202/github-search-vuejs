<template>
  <div>
    <div v-if="isLoading && repos.length === 0" class="mt-3">Loading repos...</div>
    <div v-else>
      <div v-if="repos.length === 0" class="mt-3">
        No repos to show.
      </div>
      <RepoPreview
        v-for="repo in repos"
        :repo="repo"
        :key="repo.id"
        :type="type"
      />
    </div>
  </div>
</template>

<script>
import RepoPreview from './RepoPreview.vue';

export default {
  components: {
    RepoPreview,
  },
  props: ['type'],
  computed: {
    isLoading() {
      return this.$store.state[`${this.type}`].isLoading;
    },
    repos() {
      return this.$store.state[`${this.type}`].repos;
    },
  },
  watch: {
    repos: (newValue, oldValue) => {
      if (oldValue != null && oldValue.length > 0) {
        window.scrollTo(0, 0);
      }
    },
  },
};
</script>
