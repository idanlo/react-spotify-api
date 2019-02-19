import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

const BASE_URL = 'https://api.spotify.com/v1/browse/categories';

/**
 * Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab)..<br/>
 * [Response format](https://developer.spotify.com/documentation/web-api/reference/browse/get-category/#response-format)
 * @example ../../docs/Browse/BrowseCategory.md
 */
function BrowseCategory(props) {
    let url = BASE_URL + `/${props.id}`;
    let options = { ...props.options };

    return (
        <ApiRequest url={url} options={options}>
            {(data, loading, error) => props.children(data, loading, error)}
        </ApiRequest>
    );
}

BrowseCategory.propTypes = {
    /** The Spotify category ID for the category */
    id: PropTypes.string.isRequired,
    /** Options object */
    options: PropTypes.shape({
        country: PropTypes.string,
        locale: PropTypes.string
    }),
    /** Process spotify data with render props using props.children as a function */
    children: PropTypes.func.isRequired
};

export default BrowseCategory;
