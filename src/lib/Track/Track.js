import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

const BASE_URL = 'https://api.spotify.com/v1';

const Track = props => {
    let url = BASE_URL + '/tracks';
    let options = {};
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

Track.Features = props => {
    let url = BASE_URL + '/audio-features';
    let options = {};
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

Track.Analysis = props => {
    let url = BASE_URL + `/audio-analysis/${props.id}`;
    let options = {};

    return (
        <ApiRequest url={url} options={options}>
            {data => props.children(data)}
        </ApiRequest>
    );
};

const basicPropTypes = {
    children: PropTypes.func.isRequired
};

Track.propTypes = {
    ...basicPropTypes,
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]).isRequired
};

Track.Features.propTypes = {
    ...basicPropTypes,
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]).isRequired
};

Track.Analysis.propTypes = {
    ...basicPropTypes,
    id: PropTypes.string.isRequired
};

export default Track;
