import axios from 'axios';
import { Repository } from '../store/model/repository';

const githubApi = axios.create({ baseURL: 'https://api.github.com' });

const ApiService = {
  searchRepositories(query, sortBy, order) {
    const request = githubApi.get('/search/repositories', {
      params: {
        q: query,
        sort: sortBy,
        order,
        per_page: 30,
      },
    });
    return this.postProcessSearchRequest(request);
  },
  getSearchRepositoriesPage(pageId) {
    // search's pageable pageIds we return in postProcessSearchRequest are full urls to
    // the page results, and include the baseUrl.
    const request = githubApi.get(pageId, { baseURL: '' });
    return this.postProcessSearchRequest(request);
  },
  postProcessSearchRequest(request) {
    return request.then((response) => {
      const repositories = response.data.items.map((apiRepo) => new Repository(apiRepo.id,
        apiRepo.owner.login, apiRepo.name, apiRepo.description, apiRepo.owner.avatar_url,
        apiRepo.html_url, apiRepo.owner.html_url, apiRepo.stargazers_count, apiRepo.forks_count,
        apiRepo.watchers_count));
      // eslint-disable-next-line
      const links = parseLinkHeader(response.headers['link']);
      return {
        repositories,
        firstPageId: links['first'],
        previousPageId: links['prev'],
        nextPageId: links['next'],
      };
    })
      .catch((error) => {
        throw new Error(`ApiService ${error}`);
      });
  },
  repositoriesByCreatedAtInAscendingOrder(sinceRepositoryId = 0) {
    sinceRepositoryId = sinceRepositoryId == null ? 0 : sinceRepositoryId;
    return githubApi.get('/repositories', {
      params: {
        since: sinceRepositoryId,
      },
    })
      .then(response => {
        const repositories = response.data.map(apiRepo => new Repository(apiRepo.id,
          apiRepo.owner.login, apiRepo.name, apiRepo.description, apiRepo.owner.avatar_url,
          apiRepo.html_url, apiRepo.owner.html_url, null, null, null));
        return {
          repositories,
          canLoadFirst: sinceRepositoryId > 0,
          canLoadPrevious: sinceRepositoryId > 0,
          canLoadNext: repositories.length > 0,
        };
      })
      .catch((error) => {
        throw new Error(`ApiService ${error}`);
      });
  },
  getRepositoryDetails(owner, repo) {
    const url = `/repos/${owner}/${repo}`;
    return githubApi.get(url)
      .then(response => response.data)
      .catch((error) => {
        throw new Error(`ApiService ${error}`);
      });
  },
};

// Source https://gist.github.com/niallo/3109252
function parseLinkHeader(header) {
  if (header.length === 0) {
    throw new Error('input must not be of zero length');
  }

  const linkParts = header.split(',');
  const namedLinks = {};
  linkParts.forEach(value => {
    const linkLine = value.split(';');
    if (linkLine.length !== 2) {
      throw new Error(`Invalid linkLine: ${value}`);
    }
    const name = linkLine[1].replace(/rel="(.*)"/, '$1')
      .trim();
    namedLinks[name] = linkLine[0].replace(/<(.*)>/, '$1')
      .trim();
  });

  return namedLinks;
}

export default ApiService;
