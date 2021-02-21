<template>
  <div class="card border-right-0 border-left-0 border-top-0">
    <div class="row no-gutters">
      <AvatarImage :avatar-url="repo.iconUrl"> </AvatarImage>

      <div class="col-md-10">
        <div class="card-body text-left p-2">
          <router-link :to="repoLink" class="preview-link">
            <h5 class="card-title d-inline">
              {{ repo.user }} / {{ repo.name }}
            </h5>
          </router-link>
          <div class="card-text row">
            <div class="col-10">
              <p class="mb-0">{{ repo.description }}</p>
            </div>
            <div class="col-2 text-right">
              <StarButton :repo="repo"></StarButton>
            </div>
          </div>
          <ul class="nav">
            <a
              class="nav-link text-secondary py-1 px-2"
              target="_blank"
              :href="repo.userHomeUrl"
            >
              <small><font-awesome-icon icon="link" /> User</small>
            </a>
            <a
              class="nav-link text-secondary py-1 px-2"
              target="_blank"
              :href="repo.repositoryHomeUrl"
            >
              <small><font-awesome-icon icon="link" /> Repo</small>
            </a>
          </ul>
          <p v-if="type === 'search'" class="card-text">
            <small class="text-muted bg-light p-1 mr-2">
              <font-awesome-icon icon="code-branch" />
              {{ repo.forksCount }}
              Forks
            </small>
            <small class="text-muted bg-light p-1 mr-2">
              <font-awesome-icon icon="star" />
              {{ repo.stargazersCount }}
              Stargazers
            </small>
            <small class="text-muted bg-light p-1 mr-2">
              <font-awesome-icon icon="eye" />
              {{ repo.watchersCount }}
              Watchers
            </small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AvatarImage from './AvatarImage.vue';
import StarButton from './StarButton.vue';

export default {

  components: {
    AvatarImage,
    StarButton,
  },
  props: {
    repo: { type: Object, required: true },
    type: { type: String },
  },
  computed: {
    repoLink() {
      return {
        name: 'repo',
        params: {
          owner: this.repo.user,
          repo: this.repo.name,
        },
      };
    },
  },
};
</script>
