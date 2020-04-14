import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

const BASE_URL = 'https://api.spotify.com/v1/me/top';

/**
 * Get the current user’s top artists or tracks based on calculated affinity.<br/>
 * [Response format](https://developer.spotify.com/documentation/web-api/reference/personalization/get-users-top-artists-and-tracks/#response-format)
 * @example ../../docs/User/UserTop.md
 */
function UserTop(props) {
  let url = BASE_URL + `/${props.type}`;
  let options = { ...props.options };

  return (
    <ApiRequest url={url} options={options}>
      {props.children}
    </ApiRequest>
  );
}

UserTop.propTypes = {
  /** Options object */
  options: PropTypes.shape({
    limit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    time_range: PropTypes.string,
  }),
  /** Type of data to receive - artists/tracks */
  type: PropTypes.oneOf(['artists', 'tracks']).isRequired,
  /** Process spotify data with render props using props.children as a function */
  children: PropTypes.func.isRequired,
};

UserTop.defaultProps = {
  options: {},
};

export default UserTop;
