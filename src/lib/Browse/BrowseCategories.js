import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

const BASE_URL = 'https://api.spotify.com/v1/browse/categories';

/**
 * Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).<br/>
 * [Response format](https://developer.spotify.com/documentation/web-api/reference/browse/get-list-categories/#response-format)
 * @example ../../docs/Browse/BrowseCategories.md
 */
function BrowseCategories(props) {
    let url = BASE_URL;
    let options = { ...props.options };

    return (
        <ApiRequest url={url} options={options}>
            {(data, loading, error) => props.children(data, loading, error)}
        </ApiRequest>
    );
}

BrowseCategories.propTypes = {
    /** Options object */
    options: PropTypes.shape({
        country: PropTypes.string,
        locale: PropTypes.string,
        limit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    }),
    /** Process spotify data with render props using props.children as a function */
    children: PropTypes.func.isRequired
};

export default BrowseCategories;
