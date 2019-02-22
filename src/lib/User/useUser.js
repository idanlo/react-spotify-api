import useApiRequest from '../ApiRequest/useApiRequest';

function useUser(id) {
    const url = id
        ? `https://api.spotify.com/v1/users/${id}`
        : 'https://api.spotify.com/v1/me';
    const { data, loading, error } = useApiRequest(url);

    return { data, loading, error };
}

export default useUser;
