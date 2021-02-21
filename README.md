# Github Search

A demo VueJs app that utilizes the [Github Api](https://docs.github.com/en/free-pro-team@latest/rest) to browse and display Github repositories.

The app is deployed on heroku, browse it [here](https://danny-github-search.herokuapp.com/). I'm using a free heroku account, so please wait for the app to load, it can take more than few seconds.

## Documentation

#### API usage

The GitHub API client implementation is defined in one place, and used from multiple Vuex modules. Besides the modules, the rest of the app does not know about its existence. I achieved this by defining the `Repository` and `Pageable` models (located in `/src/store/models`) which in turn are used by all other parts of the application. I think there is a need for these models as I am using a third-party API which I have no control over. I don't think this would be necessary if I used a first-party API.

TODO: error handling in the API client implementation (rate limiting and such).

#### Reuseability

The mentioned `Repository` and `Pageable` models allows almost all of the `components` to be reused between views (pages). So all from the pagination, to repository card, to star / unstar repo is based on these models.

#### Styling

I have a mix of custom css and bootstap (dependency only to its css). Mostly bootstrap is used due to it being convenient for a demo project.

#### Vuex

I used this demo project to learn the basics of Vuex. In the `/src/store` directory you can find the few actions and the multiple modules handling those actions. The `global` module handles the star / unstar repo functionality which also integrates with `localStorage`.

#### Tests

One test flow to see how one is configured and written for VueJs. It tests the `global` Vuex module and its star / unstar repo functionality.

TODO: add additional tests.

#### Unfinished features

-   Repository details is there just so we can see some more details for a repo in the app. I did not make great effort to style it, or think about it.
-   UI details like pretty loading spinners.

## Project setup

Install dependencies:

```
npm install
```

Compile and hot-reload for development:

```
npm run serve
```

Run the single unit test :D

```
npm run test:unit
```
