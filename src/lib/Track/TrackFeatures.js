import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

/**
 * Get audio feature information for a single track identified by its unique Spotify ID.<br/>
 * There are no optional parameters for this type<br/>
 * [Response format](https://developer.spotify.com/documentation/web-api/reference/tracks/get-several-audio-features/#response-format)
 * @example ../../docs/Track/TrackFeatures.md
 */
function TrackFeatures(props) {
  let url = 'https://api.spotify.com/v1/audio-features';
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

TrackFeatures.propTypes = {
  /** The id/s of the track/s */
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string.isRequired),
  ]).isRequired,
  /** Process spotify data with render props using props.children as a function */
  children: PropTypes.func.isRequired,
};

export default TrackFeatures;
