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

// these prop types are for all Artist components (also sub components like Artist.Related)
const basicPropTypes = {
    options: PropTypes.object,
    id: PropTypes.string.isRequired
};

// these are default props for all Artist components (also sub components like Artist.Related)
const basicDefaultProps = {
    options: {}
};

Artist.propTypes = {
    ...basicPropTypes,
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]).isRequired
};

Artist.Albums.propTypes = {
    ...basicPropTypes
};

Artist.Tracks.propTypes = {
    ...basicPropTypes
};

Artist.Related.propTypes = {
    ...basicPropTypes
};

Artist.defaultProps = {
    ...basicDefaultProps
};

Artist.Albums.defaultProps = {
    ...basicDefaultProps
};

Artist.Tracks.defaultProps = {
    options: {
        market: 'from_token'
    }
};

Artist.Related.defaultProps = {
    ...basicDefaultProps
};

export default Artist;
