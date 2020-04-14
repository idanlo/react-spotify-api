import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

const BASE_URL = 'https://api.spotify.com/v1/browse/new-releases';

/**
 * Get a List of New Releases Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).<br/>
 * [Response format](https://developer.spotify.com/documentation/web-api/reference/browse/get-list-new-releases/#response-format)
 * @example ../../docs/Browse/BrowseNew.md
 */
function BrowseNew(props) {
  let url = BASE_URL;
  let options = { ...props.options };

  return (
    <ApiRequest url={url} options={options}>
      {props.children}
    </ApiRequest>
  );
}

BrowseNew.propTypes = {
  /** Options object */
  options: PropTypes.shape({
    country: PropTypes.string,
    limit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  /** Process spotify data with render props using props.children as a function */
  children: PropTypes.func.isRequired,
};

export default BrowseNew;
