import React from "react";
import PropTypes from "prop-types";
import Artist from "./Components/Artist/Artist";
import Track from "./Components/Track/Track";
import Album from "./Components/Album/Album";
import Browse from "./Components/Browse/Browse";
import Playlist from "./Components/Playlist/Playlist";
import User from "./Components/User/User";

export const SpotifyApiContext = React.createContext();

// export { default as Artist } from "./Components/Artist/Artist";
export { Artist, Track, Album, Browse, Playlist, User };
