<template>
  <nav>
    <ul class="pagination d-flex justify-content-end mt-2">
      <li
        v-if="pageable.canLoadFirstPage()"
        @click.prevent="$emit('go-to-page', pageable.firstPageId)"
      >
        <a class="btn btn-sm btn-outline-dark mr-1" href>First</a>
      </li>
      <li
        v-if="pageable.canLoadPreviousPage()"
        @click.prevent="$emit('go-to-page', pageable.previousPageId)"
      >
        <a class="btn btn-sm btn-outline-dark mr-1" href>Previous</a>
      </li>
      <li
        v-if="pageable.canLoadNextPage()"
        @click.prevent="$emit('go-to-page', pageable.nextPageId)"
      >
        <a class="btn btn-sm btn-outline-dark" href>Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { Pageable } from '../store/model/pageable';

export default {
  name: 'Pagination',
  props: {
    pageable: {
      type: Pageable,
      required: true,
    },
  },
};
</script>
