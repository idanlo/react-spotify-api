import useApiRequest from '../ApiRequest/useApiRequest';

/**
 * @param {string} query - Search query keywords
 * @param {Object} options - Options object
 */
function useSearch(query, options) {
  const url = 'https://api.spotify.com/v1/search';
  const type = [];
  if (options.album) type.push('album');
  if (options.artist) type.push('artist');
  if (options.playlist) type.push('playlist');
  if (options.track) type.push('track');
  const optionsObj = { q: query, type: type.join(','), ...options };
  const { data, loading, error } = useApiRequest(url, optionsObj);

  return { data, loading, error };
}

export default useSearch;
