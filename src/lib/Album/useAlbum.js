import useApiRequest from '../ApiRequest/useApiRequest';

function useAlbum(id) {
    const url = Array.isArray(id)
        ? `https://api.spotify.com/v1/albums`
        : `https://api.spotify.com/v1/albums/${id}`;
    const options = Array.isArray(id) ? { ids: id.join(',') } : {};
    const { data, loading, error } = useApiRequest(url, options);

    return { data, loading, error };
}

export default useAlbum;
