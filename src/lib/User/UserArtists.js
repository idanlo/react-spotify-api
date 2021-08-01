import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

const BASE_URL = 'https://api.spotify.com/v1/me/following';

/**
 * Get the current user’s followed artists.<br/>
 * [Response format](https://developer.spotify.com/documentation/web-api/reference/follow/get-followed/#response-format)
 * @example ../../docs/User/UserArtists.md
 */
function UserArtists(props) {
  let url = BASE_URL;
  let options = { ...props.options, type: 'artist' };

  return (
    <ApiRequest url={url} options={options} processor={ (data) => (data && data.artists)?data.artists:data}>
      {props.children}
    </ApiRequest>
  );
}

UserArtists.propTypes = {
  /** Options object */
  options: PropTypes.shape({
    limit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    after: PropTypes.string,
  }),
  /** Process spotify data with render props using props.children as a function */
  children: PropTypes.func.isRequired,
};

UserArtists.defaultProps = {
  options: {},
};

export default UserArtists;
