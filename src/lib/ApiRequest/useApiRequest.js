import React from 'react';
import axios from 'axios';
import { SpotifyApiContext } from '../';

function useApiRequest(url, options = {}) {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [data, setData] = React.useState(null);
    const token = React.useContext(SpotifyApiContext);

    React.useEffect(() => {
        console.log('FETCHING...');
        setLoading(true);
        axios
            .get(url, {
                params: options,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(res => {
                setData(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log('[useApiRequest]', err);
                setError(true);
            });
    }, [url, options.ids]);

    return { data, loading, error };
}

export default useApiRequest;
