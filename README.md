# react-spotify-api

> This is a component library that helps you interact with the Spotify API

[![NPM](https://img.shields.io/npm/v/react-spotify-api.svg)](https://www.npmjs.com/package/react-spotify-api)
[![Build Status](https://travis-ci.com/idanlo/react-spotify-api.svg?branch=master)](https://travis-ci.com/idanlo/react-spotify-api)
[![Dependencies](https://david-dm.org/idanlo/react-spotify-api/status.svg)](https://david-dm.org/idanlo/react-spotify-api)
[![Dev Dependencies](https://david-dm.org/idanlo/react-spotify-api/dev-status.svg)](https://david-dm.org/idanlo/react-spotify-api?type=dev)
[![Peer Dependencies](https://david-dm.org/idanlo/react-spotify-api/peer-status.svg)](https://david-dm.org/idanlo/react-spotify-api?type=peer)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/react-spotify-api.svg)](https://www.npmjs.com/package/react-spotify-api)
[![GitHub](https://img.shields.io/github/license/idanlo/react-spotify-api.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/prs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

# [Documentation](https://idanlo.github.io/react-spotify-api/)

## Install

```bash
npm install react-spotify-api
// or
yarn add react-spotify-api
```

## `SpotifyApiContext`
`Artist` and `useArtist` depends on the ContextProvider to access the Spotify API. [Generate a token](https://developer.spotify.com/documentation/general/guides/authorization-guide/) and wrap your app in the Provider using that token.

```jsx static
import { SpotifyApiContext } from 'react-spotify-api'

<SpotifyApiContext.Provider token={token}>
    <App />
</SpotifyApiContext.Provider>
```

## `<Artist>`

```jsx
import React, { Component } from 'react'

import { SpotifyApiContext, Artist } from 'react-spotify-api'

function Example(props) {
    return (
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
    )
    console.log()
}
```

## `useArtist`
```jsx 
import React from 'react'
import { useArtist } from 'react-spotify-api'

function ExampleHooks(props) {
    const {data, loading, error} = useArtist(props.id);
    
    if (!artist) {
        return null
    }

    return (
        <div>
            <h1>{artist.name}</h1>
            <ul>
                {artist.genres.map(genre => (
                    <li key={genre}>{genre}</li>
                ))}
            </ul>
        </div>
    )
}   
```
## License

MIT © [idanlo](https://github.com/idanlo)
