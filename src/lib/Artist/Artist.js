import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

const BASE_URL = 'https://api.spotify.com/v1/artists';

/**
 * Get Spotify catalog information for single/multiple artist/s identified by their unique Spotify ID/s.<br/>
 * There are no optional parameters for this type
 * @example ../../docs/Artist.md
 */
const Artist = props => {
    let url = BASE_URL;
    let options = {};
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

Artist.propTypes = {
    /** Id of the artist */
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]).isRequired,
    /** Process spotify data with render props using props.children as a function */
    children: PropTypes.func.isRequired
};

export default Artist;
