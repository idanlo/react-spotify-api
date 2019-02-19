import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

const BASE_URL = 'https://api.spotify.com/v1/me/tracks';

/**
 * Get a list of the songs saved in the current Spotify user’s ‘Your Music’ library.<br/>
 * [Response format](https://developer.spotify.com/documentation/web-api/reference/library/get-users-saved-tracks/#response-format)
 * @example ../../docs/User/UserTracks.md
 */
function UserTracks(props) {
    let url = BASE_URL;
    let options = { ...props.options };

    return (
        <ApiRequest url={url} options={options}>
            {(data, loading, error) => props.children(data, loading, error)}
        </ApiRequest>
    );
}

UserTracks.propTypes = {
    /** Options object */
    options: PropTypes.shape({
        limit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        market: PropTypes.string
    }),
    /** Process spotify data with render props using props.children as a function */
    children: PropTypes.func.isRequired
};

UserTracks.defaultProps = {
    options: {}
};

export default UserTracks;
