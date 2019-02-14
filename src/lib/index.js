import React from 'react';

// Components
import {
    Artist,
    ArtistAlbums,
    ArtistRelated,
    ArtistTracks,
    useArtist
} from './Artist';
import Track from './Track/Track';
import Album from './Album/Album';
import Browse from './Browse/Browse';
import Playlist from './Playlist/Playlist';
import User from './User/User';
import Search from './Search/Search';

// Hooks
import useTrack from './Track/useTrack';

const SpotifyApiContext = React.createContext();

// Components
export {
    SpotifyApiContext,
    Artist,
    ArtistAlbums,
    ArtistTracks,
    ArtistRelated,
    Track,
    Album,
    Browse,
    Playlist,
    User,
    Search
};

// Hooks
export { useArtist, useTrack };
