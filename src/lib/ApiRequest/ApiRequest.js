import PropTypes from 'prop-types';
import useApiRequest from './useApiRequest';

function ApiRequest(props) {
  const { data, loading, error, loadMoreData } = useApiRequest(
    props.url,
    props.options
  );
  return props.children({ data, loading, error, loadMoreData });
}

ApiRequest.propTypes = {
  /** Options object */
  options: PropTypes.object,
  /** url to fetch from (HTTP request) */
  url: PropTypes.string.isRequired,
  /** Process spotify data with render props using props.children as a function */
  children: PropTypes.func.isRequired,
};

ApiRequest.defaultProps = {
  options: {},
};

export default ApiRequest;
