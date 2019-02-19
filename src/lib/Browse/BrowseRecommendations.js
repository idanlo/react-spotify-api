import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

const BASE_URL = 'https://api.spotify.com/v1/recommendations';

/**
 * Create a playlist-style listening experience based on seed artists, tracks and genres.<br/>
 * [Response format](https://developer.spotify.com/documentation/web-api/reference/browse/get-recommendations/#response-format)
 * @example ../../docs/Browse/BrowseRecommendations.md
 */
function BrowseRecommendations(props) {
    let url = BASE_URL;
    let options = { ...props.options };

    return (
        <ApiRequest url={url} options={options}>
            {(data, loading, error) => props.children(data, loading, error)}
        </ApiRequest>
    );
}

BrowseRecommendations.propTypes = {
    /** Options object */
    options: PropTypes.shape({
        limit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        market: PropTypes.string,
        seed_artists: PropTypes.string,
        seed_genres: PropTypes.string,
        seed_tracks: PropTypes.string
    }),
    /** Process spotify data with render props using props.children as a function */
    children: PropTypes.func.isRequired
};

export default BrowseRecommendations;
