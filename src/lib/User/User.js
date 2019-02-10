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
            {data => props.children(data)}
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
            {data => props.children(data)}
        </ApiRequest>
    );
};

User.Tracks = props => {
    let url = BASE_URL + `/me/tracks`;
    let options = { ...props.options };

    return (
        <ApiRequest url={url} options={options}>
            {data => props.children(data)}
        </ApiRequest>
    );
};

User.Albums = props => {
    let url = BASE_URL + `/me/albums`;
    let options = { ...props.options };

    return (
        <ApiRequest url={url} options={options}>
            {data => props.children(data)}
        </ApiRequest>
    );
};

User.Artists = props => {
    let url = BASE_URL + `/me/following/`;
    let options = { ...props.options, type: 'artist' };

    return (
        <ApiRequest url={url} options={options}>
            {data => props.children(data)}
        </ApiRequest>
    );
};

User.Top = props => {
    let url = BASE_URL + `/me/top/${props.type}`;
    let options = { ...props.options };

    return (
        <ApiRequest url={url} options={options}>
            {data => props.children(data)}
        </ApiRequest>
    );
};

const basicPropTypes = {
    children: PropTypes.func.isRequired
};

User.propTypes = {
    ...basicPropTypes,
    id: PropTypes.string,
    options: PropTypes.object
};

User.Playlists.propTypes = {
    ...basicPropTypes,
    id: PropTypes.string,
    options: PropTypes.object
};

User.Tracks.propTypes = {
    ...basicPropTypes,
    options: PropTypes.object
};

User.Albums.propTypes = {
    ...basicPropTypes,
    options: PropTypes.object
};

User.Artists.propTypes = {
    ...basicPropTypes,
    options: PropTypes.object
};

User.Top.propTypes = {
    ...basicPropTypes,
    options: PropTypes.object,
    type: PropTypes.string.isRequired
};

export default User;
