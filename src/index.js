import React from 'react';
import Artist from './Components/Artist/Artist';
import Track from './Components/Track/Track';
import Album from './Components/Album/Album';
import Browse from './Components/Browse/Browse';
import Playlist from './Components/Playlist/Playlist';
import User from './Components/User/User';
import Search from './Components/Search/Search';

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
