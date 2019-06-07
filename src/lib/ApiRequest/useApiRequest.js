import React from 'react';
import { serialize } from '../utils';
import { SpotifyApiContext } from '../';

function useApiRequest(url, options = {}) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
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
        console.log(data);
        setData(data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    }

    loadData();
  }, [url, options.ids, options.q, options, token]);

  return { data, loading, error };
}

export default useApiRequest;
