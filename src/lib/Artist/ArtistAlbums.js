import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

const BASE_URL = 'https://api.spotify.com/v1/artists';

/**
 * Get Spotify catalog information about an artist’s albums.<br/>
 * Optional parameters can be seen [here](https://developer.spotify.com/documentation/web-api/reference/artists/get-artists-albums/#query-parameters)
 * and in `PROPS & METHODS`
 * @example ../../docs/ArtistAlbums.md
 */
const ArtistAlbums = props => {
    let url = BASE_URL + `/${props.id}/albums`;
    let options = { ...props.options };
    return (
        <ApiRequest url={url} options={options}>
            {(data, loading, error) => props.children(data, loading, error)}
        </ApiRequest>
    );
};
ArtistAlbums.propTypes = {
    /** Options object */
    options: PropTypes.shape({
        include_groups: PropTypes.string,
        market: PropTypes.string,
        limit: PropTypes.string,
        offset: PropTypes.string
    }),
    /** Id of the artist */
    id: PropTypes.string.isRequired,
    /** Process spotify data with render props using props.children as a function */
    children: PropTypes.func.isRequired
};

ArtistAlbums.defaultProps = {
    options: {}
};

export default ArtistAlbums;
