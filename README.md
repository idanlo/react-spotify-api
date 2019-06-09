# react-spotify-api

A component library that helps you interact with the Spotify API

# [Demo](https://react-spotify.netlify.com/browse/featured)

[![NPM](https://img.shields.io/npm/v/react-spotify-api.svg)](https://www.npmjs.com/package/react-spotify-api)
[![Build Status](https://travis-ci.com/idanlo/react-spotify-api.svg?branch=master)](https://travis-ci.com/idanlo/react-spotify-api)
[![Dependencies](https://david-dm.org/idanlo/react-spotify-api/status.svg)](https://david-dm.org/idanlo/react-spotify-api)
[![Dev Dependencies](https://david-dm.org/idanlo/react-spotify-api/dev-status.svg)](https://david-dm.org/idanlo/react-spotify-api?type=dev)
[![Peer Dependencies](https://david-dm.org/idanlo/react-spotify-api/peer-status.svg)](https://david-dm.org/idanlo/react-spotify-api?type=peer)
![Codecov](https://img.shields.io/codecov/c/github/idanlo/react-spotify-api.svg)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/react-spotify-api.svg)](https://www.npmjs.com/package/react-spotify-api)
[![GitHub](https://img.shields.io/github/license/idanlo/react-spotify-api.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/prs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

# [Documentation](https://idanlo.github.io/react-spotify-api/)

# Features

- Components for most of Spotify's data types that pass data through render props
- Hooks for most of Spotify's data

# Roadmap

- [x] Pass Spotify data with render props
- [x] Use React.Context to pass the access token down the component tree
- [x] Hooks!
- [x] A demo page that uses this library - [available here!](https://react-spotify.netlify.com/browse/featured)
- [ ] TypeScript support!
- [ ] 100% code coverage
- [ ] Hooks for all data types from Spotify's API
- [ ] Hooks for using the [Spotify Playback SDK](https://developer.spotify.com/documentation/web-playback-sdk)

# Installing

## with npm

```bash
npm install --save react-spotify-api
```

## with yarn

```bash
yarn add react-spotify-api
```

## Wrapping your app with a Provider

in order to use the Spotify API you are required to send an access token ([read more here](https://developer.spotify.com/documentation/general/guides/authorization-guide/))
with every single http request, but the `SpotifyApiContext` provider does that for you!

### Import

```js static
import { SpotifyApiContext } from 'react-spotify-api';
```

### Wrap your app with it (all react-spotify-api components must have a SpotifyApiContext.Provider parent)

```jsx static
<SpotifyApiContext.Provider value={token}>
  <App />
</SpotifyApiContext.Provider>
```

You can now use all components without worrying about getting your access token!

## Component usage

```jsx
import React, { Component } from 'react';

import { SpotifyApiContext, Artist } from 'react-spotify-api';

function Example(props) {
  return (
    <SpotifyApiContext.Provider value={props.token}>
      <Artist id={props.id}>
        {(artist, loading, error) =>
          artist ? (
            <div>
              <h1>{artist.name}</h1>
              <ul>
                {artist.genres.map(genre => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </div>
          ) : null
        }
      </Artist>
    </SpotifyApiContext.Provider>
  );
}
```

## Hooks usage _(assuming the ExampleHooks component is wrapped with the SpotifyApiContext.Provider)_

```jsx
import React from 'react';

import { useArtist } from 'react-spotify-api';

function ExampleHooks(props) {
  const { data, loading, error } = useArtist(props.id);

  return artist ? (
    <div>
      <h1>{artist.name}</h1>
      <ul>
        {artist.genres.map(genre => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ) : null;
}
```

## Data types

- data - Each component has a link to the Spotify API endpoint where you can see the data model for that specific data type
- loading - Boolean (_true_ when loading and _false_ when finished loading)
- error - _null_ when there are no errors but an _object_ when there are - usually containing the error object received by the `fetch` api, so it looks something like: `{status: 404, message: "Not Found"}`

## License

This project is licensed under the MIT License - see the LICENSE file for details

MIT © [idanlo](https://github.com/idanlo)
