import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

const BASE_URL = 'https://api.spotify.com/v1/artists';

/**
 * Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community’s listening history.<br/>
 * There are no optional parameters for this type
 */
const ArtistRelated = props => {
    let url = BASE_URL + `/${props.id}/related-artists`;
    let options = {};

    return (
        <ApiRequest url={url} options={options}>
            {(data, loading, error) => props.children(data, loading, error)}
        </ApiRequest>
    );
};

ArtistRelated.propTypes = {
    /** Id of the artist */
    id: PropTypes.string.isRequired,
    /** Process spotify data with render props using props.children as a function */
    children: PropTypes.func.isRequired
};

export default ArtistRelated;
