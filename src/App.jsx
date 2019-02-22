import React, { Component } from 'react';

import {
    Artist,
    ArtistAlbums,
    ArtistRelated,
    ArtistTracks,
    useArtist,
    Track,
    TrackAnalysis,
    TrackFeatures,
    useTrack,
    Album,
    useAlbum,
    AlbumTracks,
    Playlist,
    PlaylistImages,
    PlaylistTracks,
    BrowseCategories,
    BrowseNew,
    BrowseRecommendations,
    BrowseFeatured,
    BrowseCategoryPlaylists,
    BrowseCategory,
    User,
    UserAlbums,
    UserArtists,
    UserTop,
    UserTracks,
    UserPlaylists,
    Search
} from './lib';

export function TestUseArtist() {
    const [id, setId] = React.useState([
        '1XpDYCrUJnvCo9Ez6yeMWh',
        '5eAWCfyUhZtHHtBdNk56l1'
    ]);
    const { data, loading, error } = useArtist(id);

    React.useEffect(() => {
        console.log(data);
    });
    // React.useEffect(() => {
    //     setTimeout(() => {
    //         setId(['5eAWCfyUhZtHHtBdNk56l1', '1XpDYCrUJnvCo9Ez6yeMWh']);
    //     }, 1000);
    // }, []);
    if (loading) {
        return <h1>Loading...</h1>;
    } else if (error) {
        return <h1>Error</h1>;
    } else if (data) {
        return data.artists.map(artist => (
            <div key={artist.id}>
                <h1>{artist.name}</h1>
                {artist.images && artist.images.length ? (
                    <img src={artist.images[0].url} alt={artist.name} />
                ) : null}
            </div>
        ));
    } else {
        return null;
    }
}

export function TestUseAlbum() {
    const [id, setId] = React.useState([
        '4vxL3cLukzWtF16JD2eb2W',
        '1AckkxSo39144vOBrJ1GkS'
    ]);
    const { data, loading, error } = useAlbum(id);

    React.useEffect(() => {
        console.log(data);
    });
    // React.useEffect(() => {
    //     setTimeout(() => {
    //         setId(['1AckkxSo39144vOBrJ1GkS', '4vxL3cLukzWtF16JD2eb2W']);
    //     }, 1000);
    // }, []);
    if (loading) {
        return <h1>Loading...</h1>;
    } else if (error) {
        return <h1>Error</h1>;
    } else if (data) {
        return data.albums.map(album => (
            <div key={album.id}>
                <h1>{album.name}</h1>
            </div>
        ));
    } else {
        return null;
    }
}

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>Artist Component</h1>
                <Artist id="6eUKZXaKkcviH0Ku9w2n3V">
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
                            <h1>Error</h1>
                        )
                    }
                </Artist>
                <h2>Artist component with multiple IDs</h2>
                <Artist
                    id={['6eUKZXaKkcviH0Ku9w2n3V', '34gCWollNqYlcodydhFabx']}
                >
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
                <ArtistAlbums id="6eUKZXaKkcviH0Ku9w2n3V">
                    {albums =>
                        albums ? (
                            <ul>
                                {albums.items.map(album => (
                                    <li key={album.id}>{album.name}</li>
                                ))}
                            </ul>
                        ) : null
                    }
                </ArtistAlbums>
                <h2>Artist.Tracks Component</h2>
                <ArtistTracks id="6eUKZXaKkcviH0Ku9w2n3V">
                    {tracks =>
                        tracks ? (
                            <ul>
                                {tracks.tracks.map(track => (
                                    <li key={track.id}>{track.name}</li>
                                ))}
                            </ul>
                        ) : null
                    }
                </ArtistTracks>
                <h2>Artist.Related Component</h2>
                <ArtistRelated id="6eUKZXaKkcviH0Ku9w2n3V">
                    {artists =>
                        artists ? (
                            <ul>
                                {artists.artists.map(artist => (
                                    <li key={artist.id}>{artist.name}</li>
                                ))}
                            </ul>
                        ) : null
                    }
                </ArtistRelated>
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
                        '1J5ZXurCRQdFHWfOiFt12x',
                        '0tGkxA0oybkQ3iR6LLXPjZ',
                        '402sXCQikR6VV2x2265Jsm'
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
                                                <li key={artist.id}>
                                                    {artist.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </React.Fragment>
                                ))}
                            </ul>
                        ) : null
                    }
                </Track>
                <h2>Track.Features Component</h2>
                <TrackFeatures id="1J5ZXurCRQdFHWfOiFt12x">
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
                </TrackFeatures>
                <h2>Track.Features for multiple IDs</h2>
                <TrackFeatures
                    id={['1J5ZXurCRQdFHWfOiFt12x', '0tGkxA0oybkQ3iR6LLXPjZ']}
                >
                    {features =>
                        features
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
                            : null
                    }
                </TrackFeatures>
                <h2>Track.Analysis Component</h2>
                <p>
                    note: the data received is large so it might take longer for
                    the response to come back than other requests to their API
                </p>
                <TrackAnalysis id="1J5ZXurCRQdFHWfOiFt12x">
                    {analysis =>
                        analysis ? (
                            <ul>
                                <li>duration - {analysis.track.duration}</li>
                                <li>
                                    number of sections -{' '}
                                    {analysis.sections.length}
                                </li>
                                <li>number of bars - {analysis.bars.length}</li>
                                <li>beats - {analysis.beats.length}</li>
                            </ul>
                        ) : null
                    }
                </TrackAnalysis>
                <h1>Album Component</h1>
                <Album id="4ueGcY7b6BzBFyssWpEjZb">
                    {album => {
                        return album ? (
                            <ul>
                                <li>{album.name}</li>
                                <ul>
                                    <li>id: {album.id}</li>
                                    <li>Artists</li>
                                    <ul>
                                        <li>
                                            {album.artists
                                                .map(artist => artist.name)
                                                .join(', ')}
                                        </li>
                                    </ul>
                                </ul>
                            </ul>
                        ) : null;
                    }}
                </Album>
                <h2>Album component with multiple IDs</h2>
                <Album
                    id={['4ueGcY7b6BzBFyssWpEjZb', '43otFXrY0bgaq5fB3GrZj6']}
                >
                    {album => {
                        return album
                            ? album.albums.map(alb => (
                                  <ul key={alb.id}>
                                      <li>{alb.name}</li>
                                      <ul>
                                          <li>id: {alb.id}</li>
                                          <ul>
                                              <li>
                                                  {alb.artists
                                                      .map(
                                                          artist => artist.name
                                                      )
                                                      .join(', ')}
                                              </li>
                                          </ul>
                                      </ul>
                                  </ul>
                              ))
                            : null;
                    }}
                </Album>
                <h2>Album.Tracks Component</h2>
                <AlbumTracks id="4ueGcY7b6BzBFyssWpEjZb">
                    {tracks => {
                        return tracks ? (
                            <ul>
                                {tracks.items.splice(0, 5).map(track => (
                                    <li key={track.id}>{track.name}</li>
                                ))}
                            </ul>
                        ) : null;
                    }}
                </AlbumTracks>
                <h1>Playlist Component</h1>
                <Playlist
                    id="060QHhmOlYMEfFdxl4NpAS"
                    options={{ fields: 'name,owner,followers' }}
                >
                    {playlist =>
                        playlist ? (
                            <ul>
                                <li>{playlist.name}</li>
                                <ul>
                                    <li>
                                        Owner - {playlist.owner.display_name}
                                    </li>
                                    <li>
                                        {playlist.followers.total} followers
                                    </li>
                                </ul>
                            </ul>
                        ) : null
                    }
                </Playlist>
                <h2>Playlist.Tracks Component</h2>
                <PlaylistTracks
                    id="060QHhmOlYMEfFdxl4NpAS"
                    options={{ limit: 10 }}
                >
                    {tracks =>
                        tracks ? (
                            <ul>
                                {tracks.items.map(track => (
                                    <li key={track.track.id}>
                                        {track.track.name}
                                    </li>
                                ))}
                            </ul>
                        ) : null
                    }
                </PlaylistTracks>
                <h2>Playlist.Images Component</h2>
                <PlaylistImages id="060QHhmOlYMEfFdxl4NpAS">
                    {images =>
                        images && images.length > 0 ? (
                            <img
                                src={images[images.length - 1].url}
                                alt="Playlist"
                            /> // last image is smallest one
                        ) : null
                    }
                </PlaylistImages>
                <h1>Browse Component</h1>
                <p>
                    All components in this category are using the dot notation
                    under Browse (for example Browse.Category) because there is
                    no default for Browse
                </p>
                <h2>Browse.Category (no ID given)</h2>
                <BrowseCategories>
                    {categories => {
                        return categories ? (
                            <ul>
                                {categories.categories.items
                                    .splice(0, 5)
                                    .map(category => (
                                        <li key={category.id}>
                                            {category.name}
                                        </li>
                                    ))}
                            </ul>
                        ) : null;
                    }}
                </BrowseCategories>
                <h2>Browse.Category (ID given)</h2>
                <BrowseCategory id="chill">
                    {category => {
                        return category ? (
                            <ul>
                                {category.icons.length > 0 ? (
                                    <img
                                        src={category.icons[0].url}
                                        alt="Category"
                                    />
                                ) : null}
                                <li>{category.name}</li>
                            </ul>
                        ) : null;
                    }}
                </BrowseCategory>
                <h2>
                    Browse.Category with playlists prop set to true (ID given)
                </h2>
                <BrowseCategoryPlaylists id="chill" playlists>
                    {playlists => {
                        return playlists ? (
                            <ul>
                                {playlists.playlists.items
                                    .splice(0, 5)
                                    .map(playlist => (
                                        <li key={playlist.id}>
                                            {playlist.name}
                                        </li>
                                    ))}
                            </ul>
                        ) : null;
                    }}
                </BrowseCategoryPlaylists>
                <h2>Browse.Featured Component</h2>
                <BrowseFeatured>
                    {playlists => {
                        return playlists ? (
                            <React.Fragment>
                                <h4>{playlists.message}</h4>
                                <ul>
                                    {playlists.playlists.items
                                        .splice(0, 5)
                                        .map(playlist => (
                                            <li key={playlist.id}>
                                                {playlist.name}
                                            </li>
                                        ))}
                                </ul>
                            </React.Fragment>
                        ) : null;
                    }}
                </BrowseFeatured>
                <h2>Browse.New Component</h2>
                <BrowseNew>
                    {albums => {
                        return albums ? (
                            <ul>
                                {albums.albums.items.splice(0, 5).map(album => (
                                    <li key={album.id}>{album.name}</li>
                                ))}
                            </ul>
                        ) : null;
                    }}
                </BrowseNew>
                <h2>Browse.Recommendations Component</h2>
                <BrowseRecommendations
                    options={{
                        seed_artists:
                            '0L8ExT028jH3ddEcZwqJJ5,34gCWollNqYlcodydhFabx'
                    }}
                >
                    {recommendations => {
                        return recommendations ? (
                            <ul>
                                <li>seeds</li>
                                <ul>
                                    {recommendations.seeds.map(seed => (
                                        <li key={seed.id}>
                                            {seed.type} - {seed.id}
                                        </li>
                                    ))}
                                </ul>
                                <li>Songs</li>
                                <ul>
                                    {recommendations.tracks
                                        .splice(0, 5)
                                        .map(track => (
                                            <li key={track.id}>
                                                {track.artists
                                                    .map(artist => artist.name)
                                                    .join(', ')}{' '}
                                                - {track.name}
                                            </li>
                                        ))}
                                </ul>
                            </ul>
                        ) : null;
                    }}
                </BrowseRecommendations>
                <h1>User Component</h1>
                <p>
                    using the User component with no 'id' prop will return data
                    for the user that belongs to the access_token received in
                    the context provider
                </p>
                <User>
                    {user =>
                        user ? (
                            <ul>
                                <li>Name - {user.display_name}</li>
                                <li>ID - {user.id}</li>
                            </ul>
                        ) : null
                    }
                </User>
                <hr />
                <User id="spotify">
                    {user =>
                        user ? (
                            <ul>
                                <li>Name - {user.display_name}</li>
                                <li>ID - {user.id}</li>
                            </ul>
                        ) : null
                    }
                </User>
                <h2>User.Playlists Component</h2>
                <p>
                    using the User.Playlists component with no 'id' prop will
                    return data for the user that belongs to the access_token
                    received in the context provider
                </p>
                <UserPlaylists options={{ limit: 3 }}>
                    {playlists =>
                        playlists ? (
                            <ul>
                                {playlists.items.map(playlist => (
                                    <li key={playlist.id}>{playlist.name}</li>
                                ))}
                            </ul>
                        ) : null
                    }
                </UserPlaylists>
                <hr />
                <UserPlaylists id="spotify" options={{ limit: 3 }}>
                    {playlists =>
                        playlists ? (
                            <ul>
                                {playlists.items.map(playlist => (
                                    <li key={playlist.id}>{playlist.name}</li>
                                ))}
                            </ul>
                        ) : null
                    }
                </UserPlaylists>
                <h2>User.Tracks Component - get user saved tracks</h2>
                <p>
                    this component requires that the access token will have the
                    'user-library-read' scope
                </p>
                <UserTracks options={{ limit: 8 }}>
                    {tracks => {
                        return tracks ? (
                            <ul>
                                {tracks.items.map(track => (
                                    <li key={track.track.id}>
                                        {track.track.name}
                                    </li>
                                ))}
                            </ul>
                        ) : null;
                    }}
                </UserTracks>
                <h2>User.Albums Component - get user saved albums</h2>
                <p>
                    this component also requires that the access token will have
                    the 'user-library-read' scope
                </p>
                <UserAlbums>
                    {albums => {
                        return albums ? (
                            <ul>
                                {albums.items.map(album => (
                                    <li key={album.album.id}>
                                        {album.album.name}
                                    </li>
                                ))}
                            </ul>
                        ) : null;
                    }}
                </UserAlbums>
                <h2>User.Artists Component - get user saved artists</h2>
                <p>
                    this component requires that the access token will have the
                    'user-follow-read' scope
                </p>
                <UserArtists>
                    {artists => {
                        return artists ? (
                            <ul>
                                {artists.artists.items.map(artist => (
                                    <li key={artist.id}>{artist.name}</li>
                                ))}
                            </ul>
                        ) : null;
                    }}
                </UserArtists>
                <h2>User.Top Component - get user top artists or tracks</h2>
                <p>
                    this component requires that the access token will have the
                    'user-top-read' scope
                </p>
                <UserTop type="tracks" options={{ limit: 10 }}>
                    {tracks => {
                        return tracks ? (
                            <ul>
                                {tracks.items.map(track => (
                                    <li key={track.id}>{track.name}</li>
                                ))}
                            </ul>
                        ) : null;
                    }}
                </UserTop>
                <h2>Search Component</h2>
                <Search query="ed" album artist options={{ limit: 5 }}>
                    {data =>
                        data ? (
                            <ul>
                                <li>Albums</li>
                                <ul>
                                    {data.albums.items.map(album => (
                                        <li key={album.id}>{album.name}</li>
                                    ))}
                                </ul>
                                <li>Artists</li>
                                <ul>
                                    {data.artists.items.map(artist => (
                                        <li key={artist.id}>{artist.name}</li>
                                    ))}
                                </ul>
                            </ul>
                        ) : null
                    }
                </Search>
            </div>
        );
    }
}
