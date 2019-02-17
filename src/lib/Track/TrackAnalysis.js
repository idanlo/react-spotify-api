import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

const BASE_URL = 'https://api.spotify.com/v1/audio-analysis';

const TrackAnalysis = props => {
    let url = BASE_URL + `/${props.id}`;

    return (
        <ApiRequest url={url} options={{ ...props.options }}>
            {(data, loading, error) => props.children(data, loading, error)}
        </ApiRequest>
    );
};

TrackAnalysis.propTypes = {
    /** Process spotify data with render props using props.children as a function */
    children: PropTypes.func.isRequired,
    /** The id of the track */
    id: PropTypes.string.isRequired,
    /** Options object (more info above) */
    options: PropTypes.object
};

TrackAnalysis.defaultProps = {
    options: {}
};

export default TrackAnalysis;
