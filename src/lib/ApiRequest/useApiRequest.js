import React from 'react';
import { serialize } from '../utils';
import { SpotifyApiContext } from '../';

function useApiRequest(url, options = {}) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState(null);
  const token = React.useContext(SpotifyApiContext);

  React.useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const res = await fetch(url + serialize(options), {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = await res.json();
        setLoading(false);
        if (data.error) {
          setError(data.error);
        } else if (!res.ok) {
          setError({ status: res.status, message: res.statusText });
        } else {
          setData(data);
          setError(null);
        }
      } catch (e) {
        setLoading(false);
        setError(e);
        setData(null);
      }
    }

    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, options.ids, options.q, token]);

  return { data, loading, error };
}

export default useApiRequest;
