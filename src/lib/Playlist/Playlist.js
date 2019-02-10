import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

const BASE_URL = 'https://api.spotify.com/v1/playlists';

const Playlist = props => {
    let url = BASE_URL + `/${props.id}`;
    let options = { ...props.options };

    return (
        <ApiRequest url={url} options={options}>
            {data => props.children(data)}
        </ApiRequest>
    );
};

Playlist.Tracks = props => {
    let url = BASE_URL + `/${props.id}/tracks`;
    let options = { ...props.options };

    return (
        <ApiRequest url={url} options={options}>
            {data => props.children(data)}
        </ApiRequest>
    );
};

Playlist.Images = props => {
    let url = BASE_URL + `/${props.id}/images`;
    // no options for this endpoint

    return <ApiRequest url={url}>{data => props.children(data)}</ApiRequest>;
};

const basicPropTypes = {
    children: PropTypes.func.isRequired
};

Playlist.propTypes = {
    ...basicPropTypes,
    id: PropTypes.string.isRequired,
    options: PropTypes.object
};

Playlist.Tracks.propTypes = {
    ...basicPropTypes,
    id: PropTypes.string.isRequired,
    options: PropTypes.object
};

Playlist.Images.propTypes = {
    ...basicPropTypes,
    id: PropTypes.string.isRequired
};

export default Playlist;
