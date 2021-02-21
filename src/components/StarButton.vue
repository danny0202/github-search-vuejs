<template>
  <button
    @click="toggleStarredRepo()"
    class="btn btn-sm btn-outline-warning"
    :class="{ btn__starred: isStarred }"
  >
    <font-awesome-icon icon="star" />
    {{ isStarred ? "Unstar" : "Star" }}
  </button>
</template>
<script>
import { TOGGLE_STARRED_REPO } from '../store/actions.type';

export default {
  props: {
    repo: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isStarred() {
      return this.$store.getters.isStarredRepo(this.repo);
    },
  },
  methods: {
    toggleStarredRepo() {
      this.$store.dispatch(TOGGLE_STARRED_REPO, this.repo);
    },
  },
};
</script>
<style lang="scss" scoped>
.btn__starred {
  color: #212529;
  background-color: #ffc107;
  border-color: #ffc107;
}
</style>
