import React, { Component } from "react";

import { Artist, SpotifyApiContext } from "react-spotify-api";

export default class App extends Component {
  render() {
    return (
      <SpotifyApiContext.Provider value="BQBnhuFZ_-XCbuyfhk53fOV413G25bJBO2VmTIhzevNMDETjdk43iDPhKY9vh7yTzaX4UgTDh1HqS99W9OorRv4FT0v5oFyJGGlhv52NxUJva5OiclB1VPo6KRwohPIl5oc5djs5PbelbEAJhbsv1Or8RxfqRDyHX2Rm1FP48_VORx75qb6eOF_gAFZBcOLCiHKMBVU9sZaHp595aYKDhKwo_6XbBgMdcrFwUQqpk0BlEsRfjR6mVR-ix5vfHAhiH_8dTdxn6D-JzPL8gfL-u6nvm-6_ikRFLLs">
        <h1>Artist Component</h1>
        <Artist id="6eUKZXaKkcviH0Ku9w2n3V">
          {artist => {
            return artist ? (
              <div>
                <h3>{artist.name}</h3>
              </div>
            ) : null;
          }}
        </Artist>
        <h1>Artist.Albums Component</h1>
        <Artist.Albums id="6eUKZXaKkcviH0Ku9w2n3V">
          {albums => {
            return albums ? (
              <ul>
                {albums.items.map(album => (
                  <li key={album.id}>{album.name}</li>
                ))}
              </ul>
            ) : null;
          }}
        </Artist.Albums>
        <h1>Artist.Tracks Component</h1>
        <Artist.Tracks id="6eUKZXaKkcviH0Ku9w2n3V">
          {tracks => {
            return tracks ? (
              <ul>
                {tracks.tracks.map(track => (
                  <li key={track.id}>{track.name}</li>
                ))}
              </ul>
            ) : null;
          }}
        </Artist.Tracks>
        <h1>Artist.Related Component</h1>
        <Artist.Related id="6eUKZXaKkcviH0Ku9w2n3V">
          {artists => {
            return artists ? (
              <ul>
                {artists.artists.map(artist => (
                  <li>{artist.name}</li>
                ))}
              </ul>
            ) : null;
          }}
        </Artist.Related>
      </SpotifyApiContext.Provider>
    );
  }
}
