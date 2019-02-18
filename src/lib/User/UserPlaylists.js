import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

const BASE_URL = 'https://api.spotify.com/v1';

/**
 * Get a list of the playlists owned or followed by the current Spotify user or a different user specified by their ID.<br/>
 * [Response format](https://developer.spotify.com/documentation/web-api/reference/playlists/get-list-users-playlists/#response-format)
 * @example ../../docs/User/UserPlaylists.md
 */
const UserPlaylists = props => {
    let url = BASE_URL;
    let options = { ...props.options };
    if (props.id) {
        url += `/users/${props.id}/playlists`;
    } else {
        url += `/me/playlists`;
    }

    return (
        <ApiRequest url={url} options={options}>
            {(data, loading, error) => props.children(data, loading, error)}
        </ApiRequest>
    );
};

UserPlaylists.propTypes = {
    /** The id of the user */
    id: PropTypes.string,
    /** Options object */
    options: PropTypes.shape({
        limit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    }),
    /** Process spotify data with render props using props.children as a function */
    children: PropTypes.func.isRequired
};

UserPlaylists.defaultProps = {
    options: {}
};

export default UserPlaylists;
