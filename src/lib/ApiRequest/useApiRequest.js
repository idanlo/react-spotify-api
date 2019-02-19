import React from 'react';
import { serialize } from '../utils';
import { SpotifyApiContext } from '../';

function useApiRequest(url, options = {}) {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [data, setData] = React.useState(null);
    const token = React.useContext(SpotifyApiContext);

    React.useLayoutEffect(() => {
        console.log('FETCHING...');
        setLoading(true);
        fetch(url + serialize(options), {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setData(data);
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
