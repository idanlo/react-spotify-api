import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

const BASE_URL = 'https://api.spotify.com/v1/artists';

/**
 * Get Spotify catalog information for single/multiple artist/s identified by their unique Spotify ID/s.<br/>
 * There are no optional parameters for this type<br/>
 * [Response format (single artist)](https://developer.spotify.com/documentation/web-api/reference/artists/get-artist/#response-format)<br/>
 * [Response format (multiple artists)](https://developer.spotify.com/documentation/web-api/reference/artists/get-several-artists/#response-format)
 * @example ../../docs/Artist/Artist.md
 */
function Artist(props) {
  let url = BASE_URL;
  let options = {};
  if (Array.isArray(props.id)) {
    options.ids = props.id.join(',');
  } else {
    url += `/${props.id}`;
  }
  return (
    <ApiRequest url={url} options={options}>
      {props.children}
    </ApiRequest>
  );
}

Artist.propTypes = {
  /** ID/s of the artist/s */
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string.isRequired),
  ]).isRequired,
  /** Process spotify data with render props using props.children as a function */
  children: PropTypes.func.isRequired,
};

export default Artist;
