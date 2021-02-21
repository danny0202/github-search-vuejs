<template>
  <ul class="nav outline-active justify-content-end my-2">
    <li class="nav-item">
      <router-link
        :to="{ name: 'starred' }"
        class="btn btn-sm btn-outline-dark mr-1"
        active-class="bg-warning text-dark border-0"
      >
        Starred
      </router-link>
    </li>
    <li class="nav-item">
      <router-link
        :to="{ name: 'all' }"
        exact
        class="btn btn-sm btn-outline-dark"
        active-class="bg-warning text-dark border-0"
      >
        All repos
      </router-link>
    </li>
  </ul>
</template>
