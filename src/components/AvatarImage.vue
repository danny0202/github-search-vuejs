<template>
  <div v-lazyload class="d-none d-md-block col-md-2 image__placeholder">
    <img
      :data-url="avatarUrl"
      class="img card-img rounded-circle"
      alt="Github user avatar"
    />
  </div>
</template>

<script>
export default {
  props: ['avatarUrl'],
};
</script>
<style lang="scss" scoped>
.image__placeholder {
  flex-direction: column;
  align-self: center;

  .img.card-img {
    flex: 1;
    background-color: lightgray;
    max-width: 80px;
    max-height: 80px;
  }
}
</style>
