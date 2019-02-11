import React from 'react';

// Components
import Artist from './Artist/Artist';
import Track from './Track/Track';
import Album from './Album/Album';
import Browse from './Browse/Browse';
import Playlist from './Playlist/Playlist';
import User from './User/User';
import Search from './Search/Search';

// Hooks
import useArtist from './Artist/useArtist';
import useTrack from './Track/useTrack';

const SpotifyApiContext = React.createContext();

// Components
export {
    SpotifyApiContext,
    Artist,
    Track,
    Album,
    Browse,
    Playlist,
    User,
    Search
};

// Hooks
export { useArtist, useTrack };
