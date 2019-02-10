import React from 'react';
import PropTypes from 'prop-types';
import ApiRequestWrapper from '../ApiRequest/ApiRequestWrapper';

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
        <ApiRequestWrapper url={url} options={options}>
            {data => props.children(data)}
        </ApiRequestWrapper>
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
        <ApiRequestWrapper url={url} options={options}>
            {data => props.children(data)}
        </ApiRequestWrapper>
    );
};

Track.Analysis = props => {
    let url = BASE_URL + `/audio-analysis/${props.id}`;
    let options = {};

    return (
        <ApiRequestWrapper url={url} options={options}>
            {data => props.children(data)}
        </ApiRequestWrapper>
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
