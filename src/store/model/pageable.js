export class Pageable {
  constructor(firstPageId = null, previousPageId = null, nextPageId = null) {
    this.firstPageId = firstPageId;
    this.previousPageId = previousPageId;
    this.nextPageId = nextPageId;
  }

  canLoadFirstPage() {
    return this.firstPageId != null;
  }

  canLoadPreviousPage() {
    return this.previousPageId != null;
  }

  canLoadNextPage() {
    return this.nextPageId != null;
  }

  canLoadAnyPage() {
    return this.canLoadFirstPage() || this.canLoadPreviousPage() || this.canLoadNextPage();
  }
}
