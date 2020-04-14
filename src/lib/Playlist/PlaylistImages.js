import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

/**
 * Get the current image associated with a specific playlist.<br/>
 * There are no optional parameters for this type<br/>
 * [Response format](https://developer.spotify.com/documentation/web-api/reference/playlists/get-playlist-cover/#response-format)
 * @example ../../docs/Playlist/PlaylistImages.md
 */
function PlaylistImages(props) {
  let url = `https://api.spotify.com/v1/playlists/${props.id}/images`;
  // no options for this endpoint

  return <ApiRequest url={url}>{props.children}</ApiRequest>;
}

PlaylistImages.propTypes = {
  /** The Spotify ID for the playlist. */
  id: PropTypes.string.isRequired,
  /** Process spotify data with render props using props.children as a function */
  children: PropTypes.func.isRequired,
};

export default PlaylistImages;
