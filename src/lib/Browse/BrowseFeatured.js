import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

const BASE_URL = 'https://api.spotify.com/v1/browse';

/**
 * Get a list of Spotify featured playlists (shown, for example, on a Spotify player’s ‘Browse’ tab).<br/>
 * [Response format](https://developer.spotify.com/documentation/web-api/reference/browse/get-list-featured-playlists/#response-format)
 * @example ../../docs/Browse/BrowseFeatured.md
 */
const BrowseFeatured = props => {
    let url = BASE_URL + `/featured-playlists`;
    let options = { ...props.options };

    return (
        <ApiRequest url={url} options={options}>
            {(data, loading, error) => props.children(data, loading, error)}
        </ApiRequest>
    );
};

BrowseFeatured.propTypes = {
    /** Options object */
    options: PropTypes.shape({
        locale: PropTypes.string,
        country: PropTypes.string,
        timestamp: PropTypes.string,
        limit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    }),
    /** Process spotify data with render props using props.children as a function */
    children: PropTypes.func.isRequired
};

export default BrowseFeatured;
