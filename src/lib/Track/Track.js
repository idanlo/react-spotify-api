import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

const BASE_URL = 'https://api.spotify.com/v1';

const Track = props => {
    let url = BASE_URL + '/tracks';
    let options = { ...props.options };
    if (Array.isArray(props.id)) {
        options.ids = props.id.join(',');
    } else {
        url += `/${props.id}`;
    }

    return (
        <ApiRequest url={url} options={options}>
            {(data, loading, error) => props.children(data, loading, error)}
        </ApiRequest>
    );
};

Track.Features = props => {
    let url = BASE_URL + '/audio-features';
    let options = { ...props.options };
    if (Array.isArray(props.id)) {
        options.ids = props.id.join(',');
    } else {
        url += `/${props.id}`;
    }

    return (
        <ApiRequest url={url} options={options}>
            {(data, loading, error) => props.children(data, loading, error)}
        </ApiRequest>
    );
};

Track.Analysis = props => {
    let url = BASE_URL + `/audio-analysis/${props.id}`;

    return (
        <ApiRequest url={url} options={{ ...props.options }}>
            {(data, loading, error) => props.children(data, loading, error)}
        </ApiRequest>
    );
};

Track.propTypes = {
    /** Process spotify data with render props using props.children as a function */
    children: PropTypes.func.isRequired,
    /** The id/s of the track/s */
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]).isRequired,
    /** Options object (more info above) */
    options: PropTypes.object
};

Track.Features.propTypes = {
    /** Process spotify data with render props using props.children as a function */
    children: PropTypes.func.isRequired,
    /** The id/s of the track/s */
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]).isRequired,
    /** Options object (more info above) */
    options: PropTypes.object
};

Track.Analysis.propTypes = {
    /** Process spotify data with render props using props.children as a function */
    children: PropTypes.func.isRequired,
    /** The id of the track */
    id: PropTypes.string.isRequired,
    /** Options object (more info above) */
    options: PropTypes.object
};

Track.defaultProps = {
    options: {}
};

Track.Features.defaultProps = {
    options: {}
};

Track.Analysis.defaultProps = {
    options: {}
};

export default Track;
