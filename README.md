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
npm install --save react-spotify-api
```

## Component usage

```jsx
import React, { Component } from 'react'

import { SpotifyApiContext, Artist } from 'react-spotify-api'

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
    )
    console.log()
}
```

## Hooks usage *(assuming the ExampleHooks component is wrapped with the SpotifyApiContext.Provider)*
```jsx 
import React from 'react'

import { useArtist } from 'react-spotify-api'

function ExampleHooks(props) {
    const {data, loading, error} = useArtist(props.id);

    return (
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
    )
}   
```
## License

MIT © [idanlo](https://github.com/idanlo)
