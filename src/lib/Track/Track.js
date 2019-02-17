import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

const BASE_URL = 'https://api.spotify.com/v1/tracks';

/**
 * Get Spotify catalog information for single/multiple track/s identified by their unique Spotify ID/s.<br/>
 * Optional parameter - market, if you don't want to specify you can set to 'from_token'<br/>
 * [Response format (single track)](https://developer.spotify.com/documentation/web-api/reference/tracks/get-track/#response-format)<br/>
 * [Response format (multiple tracks)](https://developer.spotify.com/documentation/web-api/reference/tracks/get-several-tracks/#response-format)
 * @example ../../docs/Track/Track.md
 */
const Track = props => {
    let url = BASE_URL;
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

Track.propTypes = {
    /** Process spotify data with render props using props.children as a function */
    children: PropTypes.func.isRequired,
    /** The id/s of the track/s */
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]).isRequired,
    /** Options object */
    options: PropTypes.shape({
        market: PropTypes.string
    })
};

Track.defaultProps = {
    options: {}
};

export default Track;
