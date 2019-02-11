import PropTypes from 'prop-types';
import useApiRequest from './useApiRequest';

function ApiRequest(props) {
    const { data, loading, error } = useApiRequest(props.url, props.options);
    return props.children(data, loading, error);
}

ApiRequest.propTypes = {
    options: PropTypes.object,
    url: PropTypes.string.isRequired,
    children: PropTypes.func.isRequired
};

export default ApiRequest;
