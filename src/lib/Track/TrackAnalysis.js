import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

/**
 * Get a detailed audio analysis for a single track identified by its unique Spotify ID.<br/>
 * There are no optional parameters for this type<br/>
 * [Reponse format](https://developer.spotify.com/documentation/web-api/reference/tracks/get-track/#response-format)
 * @example ../../docs/Track/TrackAnalysis.md
 */
function TrackAnalysis(props) {
  let url = `https://api.spotify.com/v1/audio-analysis/${props.id}`;

  return <ApiRequest url={url}>{props.children}</ApiRequest>;
}

TrackAnalysis.propTypes = {
  /** The id of the track */
  id: PropTypes.string.isRequired,
  /** Process spotify data with render props using props.children as a function */
  children: PropTypes.func.isRequired,
};

export default TrackAnalysis;
