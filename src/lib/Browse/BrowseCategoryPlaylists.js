import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

const BASE_URL = 'https://api.spotify.com/v1/browse/categories';

/**
 * Get a list of Spotify playlists tagged with a particular category.<br/>
 * [Response format](https://developer.spotify.com/documentation/web-api/reference/browse/get-categorys-playlists/#response-format)
 * @example ../../docs/Browse/BrowseCategoryPlaylists.md
 */
const BrowseCategoryPlaylists = props => {
    let url = BASE_URL + `/${props.id}/playlists`;
    let options = { ...props.options };

    return (
        <ApiRequest url={url} options={options}>
            {(data, loading, error) => props.children(data, loading, error)}
        </ApiRequest>
    );
};

BrowseCategoryPlaylists.propTypes = {
    /** The Spotify category ID for the category. */
    id: PropTypes.string.isRequired,
    /** Options object */
    options: PropTypes.shape({
        country: PropTypes.string,
        limit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    }),
    /** Process spotify data with render props using props.children as a function */
    children: PropTypes.func.isRequired
};

export default BrowseCategoryPlaylists;
