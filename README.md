# react-spotify-api

> This is a component library that helps you interact with the Spotify API

[![NPM](https://img.shields.io/npm/v/react-spotify-api.svg)](https://www.npmjs.com/package/react-spotify-api)
[![Build Status](https://travis-ci.com/idanlo/react-spotify-api.svg?branch=master)](https://travis-ci.com/idanlo/react-spotify-api)
[![Dependencies](https://david-dm.org/idanlo/react-spotify-api/status.svg)](https://david-dm.org/idanlo/react-spotify-api)
[![Dev Dependencies](https://david-dm.org/idanlo/react-spotify-api/dev-status.svg)](https://david-dm.org/idanlo/react-spotify-api?type=dev)
[![Peer Dependencies](https://david-dm.org/idanlo/react-spotify-api/peer-status.svg)](https://david-dm.org/idanlo/react-spotify-api?type=peer)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/react-spotify-api.svg)](https://www.npmjs.com/package/react-spotify-api)
[![GitHub](https://img.shields.io/github/license/idanlo/react-spotify-api.svg)](https://opensource.org/licenses/MIT)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# Documentation
[Docs here](https://idanlo.github.io/react-spotify-api/)

## Install

```bash
npm install --save react-spotify-api
```

## Usage

```jsx
import React, { Component } from 'react'

import { SpotifyApiContext, Artist } from 'react-spotify-api'

class Example extends Component {
  render () {
    return (
      <SpotifyApiContext.Provider value={this.props.token}>
        <Artist id={this.props.id}>
          {(artist, loading, error) =>
            artist ? (
              <ul>
                <li>{artist.name}</li>
                <ul>
                  {artist.genres.map(genre => (
                    <li key={genre}>{genre}</li>
                  ))}
                </ul>
              </ul>
            ) : loading ? (
              <h1>Loading...</h1>
            ) : (
              <h1>There has been an error</h1>
            )
          }
        </Artist>
      </SpotifyApiContext.Provider>
    )
  }
}
```

## License

MIT © [idanlo](https://github.com/idanlo)
