import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

/**
 * Get a playlist owned by a Spotify user.<br/>
 * [Response format](https://developer.spotify.com/documentation/web-api/reference/playlists/get-playlist/#response-format)
 * @example ../../docs/Playlist/Playlist.md
 */
function Playlist(props) {
  let url = `https://api.spotify.com/v1/playlists/${props.id}`;
  let options = { ...props.options };

  return (
    <ApiRequest url={url} options={options}>
      {props.children}
    </ApiRequest>
  );
}

Playlist.propTypes = {
  /** The Spotify ID for the playlist. */
  id: PropTypes.string.isRequired,
  /** Process spotify data with render props using props.children as a function */
  children: PropTypes.func.isRequired,
  /** Options object */
  options: PropTypes.shape({
    fields: PropTypes.string,
    market: PropTypes.string,
  }),
};

Playlist.defaultProps = {
  options: {},
};

export default Playlist;
