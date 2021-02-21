<template>
  <div class="container p-3">
    <router-link :to="{ name: 'github' }">
      <img src="@/assets/logo.png" class="rounded" alt="..." />
    </router-link>
    <router-link :to="{ name: 'search' }" class="header-link">
      <h1 class="mb-0 header-heading">Github Search</h1>
      <p>Explore the world of github repositories</p>
    </router-link>
  </div>
</template>
<style lang="scss" scoped>
.header-link,
.header-link:hover {
  color: #2c3e50;
  text-decoration: none;
}
@media (max-width: 768px) {
  .header-heading {
    font-size: 1.5rem;
  }
}
</style>
