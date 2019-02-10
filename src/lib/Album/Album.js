import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

const BASE_URL = 'https://api.spotify.com/v1/albums';

const Album = props => {
    let url = BASE_URL;
    let options = { ...props.options };
    if (Array.isArray(props.id)) {
        options.ids = props.id.join(',');
    } else {
        url += `/${props.id}`;
    }

    return (
        <ApiRequest url={url} options={options}>
            {data => props.children(data)}
        </ApiRequest>
    );
};

Album.Tracks = props => {
    let url = BASE_URL + `/${props.id}/tracks`;
    let options = { ...props.options };

    return (
        <ApiRequest url={url} options={options}>
            {data => props.children(data)}
        </ApiRequest>
    );
};

// these props are for all Artist components (also sub components like Artist.Related)
const basicPropTypes = {
    options: PropTypes.object,
    id: PropTypes.string.isRequired
};

// these are default props for all Artist components (also sub components like Artist.Related)
const basicDefaultProps = {
    options: {}
};

Album.propTypes = {
    ...basicPropTypes,
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]).isRequired
};

Album.Tracks.propTypes = {
    ...basicPropTypes
};

Album.defaultProps = {
    ...basicDefaultProps
};

Album.Tracks.defaultProps = {
    ...basicDefaultProps
};

export default Album;
