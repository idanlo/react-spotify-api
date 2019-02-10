import React from 'react';
import ApiRequest from '../ApiRequest/ApiRequest';

const BASE_URL = 'https://api.spotify.com/v1/artists';

function useArtist(id, optionsObj) {
    const [url, setUrl] = React.useState(BASE_URL);
    const [options, setOptions] = React.useState({ ...options });

    if (Array.isArray(id)) {
        setOptions({ ...options, ids: id.join(',') });
    } else {
        setUrl(BASE_URL + `/${id}`);
    }
    // useEffect here
}
