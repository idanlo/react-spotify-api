import React from 'react';
import PropTypes from 'prop-types';
import { SpotifyApiContext } from '../../';
import ApiRequest from './ApiRequest';

const ApiRequestWrapper = props => {
    return (
        <SpotifyApiContext.Consumer>
            {token => (
                <ApiRequest token={token} {...props}>
                    {(data, loading, error) => {
                        return props.children(data, loading, error);
                    }}
                </ApiRequest>
            )}
        </SpotifyApiContext.Consumer>
    );
};

ApiRequestWrapper.propTypes = {
    children: PropTypes.func.isRequired
};

export default ApiRequestWrapper;
