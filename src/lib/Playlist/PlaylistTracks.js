import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

const BASE_URL = 'https://api.spotify.com/v1/playlists';

/**
 * Get full details of the tracks of a playlist owned by a Spotify user.<br/>
 * [Response format](https://developer.spotify.com/documentation/web-api/reference/playlists/get-playlists-tracks/#response-format)
 * @example ../../docs/Playlist/PlaylistTracks.md
 */
const PlaylistTracks = props => {
    let url = BASE_URL + `/${props.id}/tracks`;
    let options = { ...props.options };

    return (
        <ApiRequest url={url} options={options}>
            {(data, loading, error) => props.children(data, loading, error)}
        </ApiRequest>
    );
};

PlaylistTracks.propTypes = {
    /** The Spotify ID for the playlist. */
    id: PropTypes.string.isRequired,
    /** Options object */
    options: PropTypes.shape({
        fields: PropTypes.string,
        limit: PropTypes.string,
        offset: PropTypes.string,
        market: PropTypes.string
    }),
    /** Process spotify data with render props using props.children as a function */
    children: PropTypes.func.isRequired
};

PlaylistTracks.defaultProps = {
    options: {}
};

export default PlaylistTracks;
