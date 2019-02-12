import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

const BASE_URL = 'https://api.spotify.com/v1/artists';

const Artist = props => {
    let url = BASE_URL;
    let options = { ...props.options };
    if (Array.isArray(props.id)) {
        options.ids = props.id.join(',');
    } else {
        url += `/${props.id}`;
    }
    return (
        <ApiRequest url={url} options={options}>
            {data => props.children(data)}
        </ApiRequest>
    );
};

Artist.Albums = props => {
    let url = BASE_URL + `/${props.id}/albums`;
    let options = { ...props.options };
    return (
        <ApiRequest url={url} options={options}>
            {data => props.children(data)}
        </ApiRequest>
    );
};

Artist.Tracks = props => {
    let url = BASE_URL + `/${props.id}/top-tracks`;
    let options = { ...props.options };
    return (
        <ApiRequest url={url} options={options}>
            {data => props.children(data)}
        </ApiRequest>
    );
};

Artist.Related = props => {
    let url = BASE_URL + `/${props.id}/related-artists`;
    let options = { ...props.options };

    return (
        <ApiRequest url={url} options={options}>
            {data => props.children(data)}
        </ApiRequest>
    );
};

Artist.propTypes = {
    /** Options object (more info above) */
    options: PropTypes.object,
    /** Id of the artist */
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]).isRequired
};

Artist.Albums.propTypes = {
    /** Options object (more info above) */
    options: PropTypes.object,
    /** Id of the artist */
    id: PropTypes.string.isRequired
};

Artist.Tracks.propTypes = {
    /** Options object (more info above) */
    options: PropTypes.object,
    /** Id of the artist */
    id: PropTypes.string.isRequired
};

Artist.Related.propTypes = {
    /** Options object (more info above) */
    options: PropTypes.object,
    /** Id of the artist */
    id: PropTypes.string.isRequired
};

Artist.defaultProps = {
    options: {}
};

Artist.Albums.defaultProps = {
    options: {}
};

Artist.Tracks.defaultProps = {
    options: {
        market: 'from_token'
    }
};

Artist.Related.defaultProps = {
    options: {}
};

Artist.Albums.displayName = 'Artist.Albums';
Artist.Tracks.displayName = 'Artist.Tracks';
Artist.Related.displayName = 'Artist.Related';

export default Artist;
