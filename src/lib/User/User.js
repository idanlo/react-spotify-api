import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

/**
 * Get detailed profile information about the current user or a user specified by their Spotify ID (including the current user’s username).<br/>
 * [Response format (current user profile)](https://developer.spotify.com/documentation/web-api/reference/users-profile/get-current-users-profile/#response-format)<br/>
 * [Response format (different user profile)](https://developer.spotify.com/documentation/web-api/reference/users-profile/get-users-profile/#response-format)
 * @example ../../docs/User/User.md
 */
function User(props) {
    let url = 'https://api.spotify.com/v1';
    let options = {};
    if (props.id) {
        url += `/users/${props.id}`;
    } else {
        url += `/me`;
    }

    return (
        <ApiRequest url={url} options={options}>
            {(data, loading, error) => props.children(data, loading, error)}
        </ApiRequest>
    );
}

User.propTypes = {
    /** The Spotify ID of the user (if not specified then current user) */
    id: PropTypes.string,
    /** Process spotify data with render props using props.children as a function */
    children: PropTypes.func.isRequired
};
export default User;
