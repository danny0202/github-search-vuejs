<template>
  <div>
    <div class="input-group pt-sm-2 pt-md-5">
      <!-- very trivial validation, only max length. the API has more specific rules
       on the length and which characters are not counted, and other rules we do not work with.
       https://developer.github.com/v3/search/#limitations-on-query-length -->
      <input
        type="text"
        class="form-control"
        maxlength="256"
        placeholder="Search GitHub, or just type in 'language:javascript'"
        v-model="query"
        @keyup.enter="search()"
      />
      <div class="input-group-append">
        <select class="custom-select h-100" v-model="selectedIndex">
          <option
            v-for="(option, index) in sortOptions"
            :key="index"
            :value="index"
            :selected="selectedIndex === index"
          >
            {{ option.label }}
          </option>
        </select>
        <button class="btn btn-dark text-white" type="button" @click="search">
          <font-awesome-icon icon="search" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { SEARCH_REPOS } from '../store/actions.type';

export default {
  data() {
    return {
      query: '',
      selectedIndex: 0,
    };
  },
  components: {},
  mounted() {
  },
  computed: {
    sortOptions() {
      return this.$store.state.search.sortOptions;
    },
  },
  methods: {
    search() {
      this.$store.dispatch(`search/${SEARCH_REPOS}`, {
        query: this.query,
        sortOption: this.sortOptions[this.selectedIndex],
      });
    },
  },
};
</script>
