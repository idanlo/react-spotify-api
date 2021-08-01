import PropTypes from 'prop-types';
import useApiRequest from './useApiRequest';

function ApiRequest(props) {
  const { data, loading, error, loadMoreData } = useApiRequest(
    props.url,
    props.options,
    props.processor
  );
  return props.children({ data, loading, error, loadMoreData });
}

ApiRequest.propTypes = {
  /** Options object */
  options: PropTypes.object,
  /** url to fetch from (HTTP request) */
  url: PropTypes.string.isRequired,
  /** processor */
  processor: PropTypes.func,
  /** Process spotify data with render props using props.children as a function */
  children: PropTypes.func.isRequired,
};

ApiRequest.defaultProps = {
  options: {},
  processor: null,
};

export default ApiRequest;
