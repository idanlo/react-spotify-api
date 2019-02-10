import React from 'react';
import { SpotifyApiContext } from '../';
import PropTypes from 'prop-types';
import axios from 'axios';

function ApiRequest(props) {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const token = React.useContext(SpotifyApiContext);
    React.useEffect(() => {
        console.log('REACT-SPOTIFY-API HOOKS UPDATE - FETCHING DATA');
        axios
            .get(props.url, {
                params: props.options,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(res => {
                setData(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setError(true);
            });
    }, [props.url, props.options]);
    return props.children(data, loading, error);
}

ApiRequest.propTypes = {
    options: PropTypes.object,
    url: PropTypes.string.isRequired,
    children: PropTypes.func.isRequired
};

export default ApiRequest;
