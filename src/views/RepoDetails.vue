<template>
  <div class="details container my-2">
    <div v-if="isLoading">Loading repos...</div>
    <div v-else class="container">
      <div class="card mb-3">
        <div
          class="card-header bg-dark text-light d-flex align-items-center py-2"
        >
          <img
            :src="repo.owner.avatar_url"
            class="rounded-circle mr-3 p2"
            alt="Github user avatar"
            style="max-width: 80px"
          />
          <div>
            <h5 class="card-title mt-3">
              {{ repo.owner.login }} / {{ repo.name }}
            </h5>
            <p>
              {{ repo.description }}
            </p>
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-6">
              <h5>Repo Details</h5>
              <table class="table text-left table-sm table-responsive">
                <tbody>
                <tr>
                  <th>Name</th>
                  <td>{{ repo.name }}</td>
                </tr>
                <tr>
                  <th>Owner</th>
                  <td>{{ repo.owner.login }}</td>
                </tr>
                <tr>
                  <th>Github Url</th>
                  <td>
                    <a
                      class="text-secondary"
                      target="_blank"
                      :href="repo.html_url"
                    >
                      <font-awesome-icon icon="link"/>
                      {{ repo.html_url }}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>Homepage</th>
                  <td>
                    <a
                      class="text-secondary"
                      target="_blank"
                      :href="repo.homepage"
                    >
                      <font-awesome-icon icon="link"/>
                      {{ repo.homepage }}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>Last Updated</th>
                  <td>{{ repo.updated_at | formatDate }}</td>
                </tr>
                <tr>
                  <th>Created At</th>
                  <td>{{ repo.created_at | formatDate }}</td>
                </tr>
                <tr>
                  <th>Forks</th>
                  <td>{{ repo.forks_count }}</td>
                </tr>
                <tr>
                  <th>Open Issues</th>
                  <td>{{ repo.open_issues_count }}</td>
                </tr>
                <tr>
                  <th>Stargazers</th>
                  <td>{{ repo.stargazers_count }}</td>
                </tr>
                <tr>
                  <th>Watchers</th>
                  <td>{{ repo.watchers_count }}</td>
                </tr>
                <tr>
                  <th>Subscribers</th>
                  <td>{{ repo.subscribers_count }}</td>
                </tr>

                <tr>
                  <th>Language</th>
                  <td>{{ repo.language }}</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="card-footer bg-dark text-light">
          <div class="text-left">
            <button @click="$router.go(-1)" class="btn btn-sm btn-light">
              <font-awesome-icon icon="arrow-left"></font-awesome-icon>
              Go back
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment';
import { FETCH_REPO_DETAILS } from '../store/actions.type';

export default {
  mounted() {
    this.loadDetails(this.$route.params.owner, this.$route.params.repo);
  },
  computed: {
    isLoading() {
      return this.$store.state.details.isLoading;
    },
    repo() {
      return this.$store.state.details.repo;
    },
  },
  methods: {
    loadDetails(owner, repo) {
      this.$store.dispatch(`details/${FETCH_REPO_DETAILS}`, {
        owner,
        repo,
      });
    },
  },
  filters: {
    formatDate(value) {
      if (value) {
        return moment(String(value)).format('MM/DD/YYYY');
      }
      return '';
    },
  },
};
</script>
