import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

/**
 * Get Spotify catalog information for single/multiple track/s identified by their unique Spotify ID/s.<br/>
 * Optional parameter - market, if you don't want to specify you can set to 'from_token'<br/>
 * [Response format (single track)](https://developer.spotify.com/documentation/web-api/reference/tracks/get-track/#response-format)<br/>
 * [Response format (multiple tracks)](https://developer.spotify.com/documentation/web-api/reference/tracks/get-several-tracks/#response-format)
 * @example ../../docs/Track/Track.md
 */
function Track(props) {
  let url = 'https://api.spotify.com/v1/tracks';
  let options = { ...props.options };
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

Track.propTypes = {
  /** Process spotify data with render props using props.children as a function */
  children: PropTypes.func.isRequired,
  /** The id/s of the track/s */
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string.isRequired),
  ]).isRequired,
  /** Options object */
  options: PropTypes.shape({
    market: PropTypes.string,
  }),
};

Track.defaultProps = {
  options: {},
};

export default Track;
