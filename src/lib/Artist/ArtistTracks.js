import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

const BASE_URL = 'https://api.spotify.com/v1/artists';

/**
 * Get Spotify catalog information about an artist’s top tracks by country.<br/>
 * Optional parameters can be seen [here](https://developer.spotify.com/documentation/web-api/reference/artists/get-artists-top-tracks/#query-parameters)
 * and in `PROPS & METHODS`<br/>
 * [Response format](https://developer.spotify.com/documentation/web-api/reference/artists/get-artists-top-tracks/#respose-format)
 */
const ArtistTracks = props => {
    let url = BASE_URL + `/${props.id}/top-tracks`;
    let options = { ...props.options };
    return (
        <ApiRequest url={url} options={options}>
            {(data, loading, error) => props.children(data, loading, error)}
        </ApiRequest>
    );
};
ArtistTracks.propTypes = {
    /** Options object (default market is `from_token`) */
    options: PropTypes.shape({
        market: PropTypes.string.isRequired
    }),
    /** Id of the artist */
    id: PropTypes.string.isRequired,
    /** Process spotify data with render props using props.children as a function */
    children: PropTypes.func.isRequired
};

ArtistTracks.defaultProps = {
    options: {
        market: 'from_token'
    }
};

export default ArtistTracks;
