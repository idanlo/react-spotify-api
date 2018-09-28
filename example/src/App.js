import React, { Component } from "react";

import { Artist, Track, SpotifyApiContext } from "react-spotify-api";

export default class App extends Component {
  render() {
    return (
      <SpotifyApiContext.Provider value="BQBUCKptzQoqWWba2Xue76cNNwiwbijEPim_j5um_Z8EUj7cXQQ5yhF0KVKJUgnSaKQ12nRTk5_bH07NRCGluwUoUFnZeHWYSVbbY2oVCCvOVsCei-R5FDR0yGLIDXkvbyg2gkIwi5uFt76iT6XSWpLegf9m7dic5O_DO76lTg84ZNRy3XvwZRcfB4Oj2FBAQuTY2qqle1P7yCON_AbVs9kRn0QSdgHUh1pk9BPWAEHqxhgwvyuyAl9udUaF3KTFa7rksgJhVq1NpteBa69vxIauixNWwftI3hU">
        <h1>Artist Component</h1>
        <Artist id="6eUKZXaKkcviH0Ku9w2n3V">
          {artist => {
            return artist ? (
              <ul>
                <li>{artist.name}</li>
                <ul>
                  {artist.genres.map(genre => (
                    <li key={genre}>{genre}</li>
                  ))}
                </ul>
              </ul>
            ) : null;
          }}
        </Artist>
        <h2>Artist component with multiple IDs</h2>
        <Artist id={["6eUKZXaKkcviH0Ku9w2n3V", "34gCWollNqYlcodydhFabx"]}>
          {artists =>
            artists ? (
              <ul>
                {artists.artists.map(artist => (
                  <React.Fragment key={artist.id}>
                    <li>{artist.name}</li>
                    <ul>
                      {artist.genres.map(genre => (
                        <li key={genre}>{genre}</li>
                      ))}
                    </ul>
                  </React.Fragment>
                ))}
              </ul>
            ) : null
          }
        </Artist>
        <h2>Artist.Albums Component</h2>
        <Artist.Albums id="6eUKZXaKkcviH0Ku9w2n3V">
          {albums =>
            albums ? (
              <ul>
                {albums.items.map(album => (
                  <li key={album.id}>{album.name}</li>
                ))}
              </ul>
            ) : null
          }
        </Artist.Albums>
        <h2>Artist.Tracks Component</h2>
        <Artist.Tracks id="6eUKZXaKkcviH0Ku9w2n3V">
          {tracks =>
            tracks ? (
              <ul>
                {tracks.tracks.map(track => (
                  <li key={track.id}>{track.name}</li>
                ))}
              </ul>
            ) : null
          }
        </Artist.Tracks>
        <h2>Artist.Related Component</h2>
        <Artist.Related id="6eUKZXaKkcviH0Ku9w2n3V">
          {artists =>
            artists ? (
              <ul>
                {artists.artists.map(artist => (
                  <li key={artist.id}>{artist.name}</li>
                ))}
              </ul>
            ) : null
          }
        </Artist.Related>
        <h1>Track Component</h1>
        <Track id="1J5ZXurCRQdFHWfOiFt12x">
          {track =>
            track ? (
              <ul>
                <li>{track.name}</li>
                <ul>
                  {track.artists.map(artist => (
                    <li key={artist.id}>{artist.name}</li>
                  ))}
                </ul>
              </ul>
            ) : null
          }
        </Track>
        <h2>Track component will multiple IDs</h2>
        <Track
          id={[
            "1J5ZXurCRQdFHWfOiFt12x",
            "0tGkxA0oybkQ3iR6LLXPjZ",
            "402sXCQikR6VV2x2265Jsm"
          ]}
        >
          {tracks =>
            tracks ? (
              <ul>
                {tracks.tracks.map(track => (
                  <React.Fragment key={track.id}>
                    <li>{track.name}</li>
                    <ul>
                      {track.artists.map(artist => (
                        <li key={artist.id}>{artist.name}</li>
                      ))}
                    </ul>
                  </React.Fragment>
                ))}
              </ul>
            ) : null
          }
        </Track>
        <h2>Track.Features Component</h2>
        <Track.Features id="1J5ZXurCRQdFHWfOiFt12x">
          {features =>
            features ? (
              <ul>
                {Object.keys(features).map(feature => (
                  <li key={feature}>
                    {feature} - {features[feature]}
                  </li>
                ))}
              </ul>
            ) : null
          }
        </Track.Features>
        <h2>Track.Features for multiple IDs</h2>
        <Track.Features
          id={["1J5ZXurCRQdFHWfOiFt12x", "0tGkxA0oybkQ3iR6LLXPjZ"]}
        >
          {features => {
            console.log(features);
            return features
              ? features.audio_features.map(feature => (
                  <ul key={feature.id}>
                    {Object.keys(feature)
                      .splice(0, 5)
                      .map(feat => (
                        <li key={feat}>
                          {feat} - {feature[feat]}
                        </li>
                      ))}
                  </ul>
                ))
              : null;
          }}
        </Track.Features>
        <h2>Track.Analysis Component</h2>
        <p>
          note: the data received is large so it might take longer for the
          response to come back than other requests to their API
        </p>
        <Track.Analysis id="1J5ZXurCRQdFHWfOiFt12x">
          {analysis =>
            analysis ? (
              <ul>
                <li>duration - {analysis.track.duration}</li>
                <li>number of sections - {analysis.sections.length}</li>
                <li>number of bars - {analysis.bars.length}</li>
                <li>beats - {analysis.beats.length}</li>
              </ul>
            ) : null
          }
        </Track.Analysis>
      </SpotifyApiContext.Provider>
    );
  }
}
