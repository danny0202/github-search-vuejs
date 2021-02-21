export class Repository {
  constructor(id, user, name, description, iconUrl,
    repositoryHomeUrl, userHomeUrl, stargazersCount, forksCount, watchersCount) {
    this.id = id;
    this.user = user;
    this.name = name;
    this.description = description;
    this.iconUrl = iconUrl;
    this.repositoryHomeUrl = repositoryHomeUrl;
    this.userHomeUrl = userHomeUrl;
    this.stargazersCount = stargazersCount;
    this.forksCount = forksCount;
    this.watchersCount = watchersCount;
  }
}
