import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

/**
 * Get Spotify Catalog information about artists, albums, tracks or playlists that match a keyword string.<br/>
 * [Writing a query - guidelines](https://developer.spotify.com/documentation/web-api/reference/search/search/#writing-a-query---guidelines)<br/>
 * [Response format](https://developer.spotify.com/documentation/web-api/reference/search/search/#response-format)
 * @example ../../docs/Search/Search.md
 */
function Search(props) {
  const url = 'https://api.spotify.com/v1/search';
  const options = { ...props.options };
  const type = [];
  if (props.album) type.push('album');
  if (props.artist) type.push('artist');
  if (props.playlist) type.push('playlist');
  if (props.track) type.push('track');
  options.type = type.join(',');
  options.q = props.query;

  return (
    <ApiRequest url={url} options={options}>
      {(data, loading, error) => {
        return props.children(data, loading, error);
      }}
    </ApiRequest>
  );
}

Search.propTypes = {
  /** Search query keywords and optional field filters and operators. */
  query: PropTypes.string.isRequired,
  /** Get results for albums */
  album: PropTypes.bool,
  /** Get results for artists */
  artist: PropTypes.bool,
  /** Get results for playlists */
  playlist: PropTypes.bool,
  /** Get results for tracks */
  track: PropTypes.bool,
  /** Options object */
  options: PropTypes.shape({
    market: PropTypes.string,
    limit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    include_external: PropTypes.string
  }),
  /** Process spotify data with render props using props.children as a function */
  children: PropTypes.func.isRequired
};

Search.defaultProps = {
  options: {}
};

export default Search;
