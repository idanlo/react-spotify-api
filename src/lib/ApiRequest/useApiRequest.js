/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { serialize } from '../utils';
import { SpotifyApiContext, SpotifyApiAxiosContext } from '../';

function useApiRequest(url, options = {}, processor = null) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState(null);
  const token = React.useContext(SpotifyApiContext);
  const axios = React.useContext(SpotifyApiAxiosContext);

  const loadData = React.useCallback(async () => {
    try {
      setLoading(true);
      let res = null;
      let resData = null;
      if (axios) {
        res = await axios.get(url + serialize(options), {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        resData = res.data;
      } else {
        res = await fetch(url + serialize(options), {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        resData = await res.json();
      }
      if (processor) resData = processor(resData)
      setLoading(false);

      if (resData.error) {
        setError(resData.error);
      } else if (res.status !== 200) {
        setError({ status: res.status, message: res.statusText });
      } else {
        setData(resData);
        setError(null);
      }
    } catch (e) {
      setLoading(false);
      setError(e);
      setData(null);
    }
  }, [axios, options.ids, options.q, token, url]);

  React.useEffect(() => {
    loadData();
  }, [url, options.ids, options.q, token, loadData]);

  const loadMoreData = React.useCallback(async () => {
    try {
      if (data && data.next && data.items) {
        setLoading(true);
        let res = null;
        let resData = null;
        const { limit, offset, ...wantedOpts } = options;
        if (axios) {
          res = await axios.get(data.next + serialize(wantedOpts, true), {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          resData = res.data;
        } else {
          res = await fetch(data.next + serialize(wantedOpts, true), {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          resData = await res.json();
        }
        if (processor) resData = processor(resData)
        setLoading(false);

        if (resData.error) {
          setError(resData.error);
        } else if (res.status !== 200) {
          setError({ status: res.status, message: res.statusText });
        } else {
          setData({ ...resData, items: data.items.concat(resData.items) });
          setError(null);
        }
      }
    } catch (e) {
      setLoading(false);
      setError(e);
      setData(null);
    }
  }, [axios, options.ids, options.q, url, token, data]);

  return { data, loading, error, loadMoreData };
}

export default useApiRequest;
