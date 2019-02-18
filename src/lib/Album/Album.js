import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

const BASE_URL = 'https://api.spotify.com/v1/albums';

/**
 * Get Spotify catalog information for single/multiple album/s identified by their Spotify ID/s.<br/>
 * There are no optional parameters for this type<br/>
 * [Response format (single album)](https://developer.spotify.com/documentation/web-api/reference/albums/get-album/#response-format)<br/>
 * [Response format (multiple albums)](https://developer.spotify.com/documentation/web-api/reference/albums/get-several-albums/#response-format)
 * @example ../../docs/Album/Album.md
 */
const Album = props => {
    let url = BASE_URL;
    let options = { ...props.options };
    if (Array.isArray(props.id)) {
        options.ids = props.id.join(',');
    } else {
        url += `/${props.id}`;
    }

    return (
        <ApiRequest url={url} options={options}>
            {data => props.children(data)}
        </ApiRequest>
    );
};

Album.propTypes = {
    /** ID/s of the album/s */
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]).isRequired,
    /** Options object */
    options: PropTypes.shape({
        market: PropTypes.string
    }),
    /** Process spotify data with render props using props.children as a function */
    children: PropTypes.func.isRequired
};

Album.defaultProps = {
    options: {}
};

export default Album;
