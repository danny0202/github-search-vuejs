<template>
  <div class="container h-100">
    <div class="row h-100 d-flex flex-column">
      <div class="col">
        <PageNavigation></PageNavigation>
        <AppHeader></AppHeader>
        <SearchBar></SearchBar>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import SearchBar from '../components/SearchBar.vue';
import PageNavigation from '../components/PageNavigation.vue';
import AppHeader from '../components/AppHeader.vue';

export default {
  name: 'home',
  components: {
    SearchBar,
    PageNavigation,
    AppHeader,
  },
  computed: {
  },
};
</script>
