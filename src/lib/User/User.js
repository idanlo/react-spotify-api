import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

const BASE_URL = 'https://api.spotify.com/v1';

const User = props => {
    let url = BASE_URL;
    let options = { ...props.options };
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
};

User.Playlists = props => {
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

User.Tracks = props => {
    let url = BASE_URL + `/me/tracks`;
    let options = { ...props.options };

    return (
        <ApiRequest url={url} options={options}>
            {(data, loading, error) => props.children(data, loading, error)}
        </ApiRequest>
    );
};

User.Albums = props => {
    let url = BASE_URL + `/me/albums`;
    let options = { ...props.options };

    return (
        <ApiRequest url={url} options={options}>
            {(data, loading, error) => props.children(data, loading, error)}
        </ApiRequest>
    );
};

User.Artists = props => {
    let url = BASE_URL + `/me/following/`;
    let options = { ...props.options, type: 'artist' };

    return (
        <ApiRequest url={url} options={options}>
            {(data, loading, error) => props.children(data, loading, error)}
        </ApiRequest>
    );
};

User.Top = props => {
    let url = BASE_URL + `/me/top/${props.type}`;
    let options = { ...props.options };

    return (
        <ApiRequest url={url} options={options}>
            {(data, loading, error) => props.children(data, loading, error)}
        </ApiRequest>
    );
};

User.propTypes = {
    /** Process spotify data with render props using props.children as a function */
    children: PropTypes.func.isRequired,
    /** The id of the user */
    id: PropTypes.string,
    /** Options object (more info above) */
    options: PropTypes.object
};

User.Playlists.propTypes = {
    /** Process spotify data with render props using props.children as a function */
    children: PropTypes.func.isRequired,
    /** The id of the user */
    id: PropTypes.string,
    /** Options object (more info above) */
    options: PropTypes.object
};

User.Tracks.propTypes = {
    /** Process spotify data with render props using props.children as a function */
    children: PropTypes.func.isRequired,
    /** Options object (more info above) */
    options: PropTypes.object
};

User.Albums.propTypes = {
    /** Process spotify data with render props using props.children as a function */
    children: PropTypes.func.isRequired,
    /** Options object (more info above) */
    options: PropTypes.object
};

User.Artists.propTypes = {
    /** Process spotify data with render props using props.children as a function */
    children: PropTypes.func.isRequired,
    /** Options object (more info above) */
    options: PropTypes.object
};

User.Top.propTypes = {
    /** Process spotify data with render props using props.children as a function */
    children: PropTypes.func.isRequired,
    /** Options object (more info above) */
    options: PropTypes.object,
    /** Type of data to receive - artists/tracks */
    type: PropTypes.oneOf(['artists', 'tracks']).isRequired
};

User.defaultProps = {
    options: {}
};

User.Playlists.defaultProps = {
    options: {}
};

User.Tracks.defaultProps = {
    options: {}
};

User.Albums.defaultProps = {
    options: {}
};
User.Artists.defaultProps = {
    options: {}
};
User.Top.defaultProps = {
    options: {}
};
export default User;
