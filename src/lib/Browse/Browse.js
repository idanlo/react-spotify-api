import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

const BASE_URL = 'https://api.spotify.com/v1/browse';

const Browse = {};

Browse.Category = props => {
    let url = BASE_URL + '/categories';
    let options = { ...props.options };
    if (props.id) {
        url += `/${props.id}`;
    }

    if (props.playlists) {
        url += `/playlists`;
    }

    return (
        <ApiRequest url={url} options={options}>
            {(data, loading, error) => props.children(data, loading, error)}
        </ApiRequest>
    );
};

Browse.Featured = props => {
    let url = BASE_URL + `/featured-playlists`;
    let options = { ...props.options };

    return (
        <ApiRequest url={url} options={options}>
            {(data, loading, error) => props.children(data, loading, error)}
        </ApiRequest>
    );
};

Browse.New = props => {
    let url = BASE_URL + `/new-releases`;
    let options = { ...props.options };

    return (
        <ApiRequest url={url} options={options}>
            {(data, loading, error) => props.children(data, loading, error)}
        </ApiRequest>
    );
};

Browse.Recommendations = props => {
    let url = 'https://api.spotify.com/v1/recommendations';
    let options = { ...props.options };

    return (
        <ApiRequest url={url} options={options}>
            {(data, loading, error) => props.children(data, loading, error)}
        </ApiRequest>
    );
};

Browse.Category.propTypes = {
    /** Process spotify data with render props using props.children as a function */
    children: PropTypes.func.isRequired,
    id: PropTypes.string,
    options: PropTypes.object,
    playlists: PropTypes.bool
};

Browse.Featured.propTypes = {
    /** Process spotify data with render props using props.children as a function */
    children: PropTypes.func.isRequired,
    options: PropTypes.object
};

Browse.New.propTypes = {
    /** Process spotify data with render props using props.children as a function */
    children: PropTypes.func.isRequired,
    options: PropTypes.object
};

Browse.Recommendations.propTypes = {
    /** Process spotify data with render props using props.children as a function */
    children: PropTypes.func.isRequired,
    options: PropTypes.object.isRequired
};

export default Browse;
