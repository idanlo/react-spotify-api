import React from "react";
import PropTypes from "prop-types";
import Artist from "./Components/Artist/Artist";
import Track from "./Components/Track/Track";

export const SpotifyApiContext = React.createContext();

// export { default as Artist } from "./Components/Artist/Artist";
export { Artist, Track };
