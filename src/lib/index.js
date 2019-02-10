import React from 'react';
import Artist from './Artist/Artist';
import Track from './Track/Track';
import Album from './Album/Album';
import Browse from './Browse/Browse';
import Playlist from './Playlist/Playlist';
import User from './User/User';
import Search from './Search/Search';

const SpotifyApiContext = React.createContext();

// export { default as Artist } from "./Components/Artist/Artist";
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
