import React from 'react';
import PropTypes from 'prop-types';
import ApiRequestWrapper from '../ApiRequest/ApiRequestWrapper';

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
    <ApiRequestWrapper url={url} options={options}>
      {data => props.children(data)}
    </ApiRequestWrapper>
  );
};

Browse.Featured = props => {
  let url = BASE_URL + `/featured-playlists`;
  let options = { ...props.options };

  return (
    <ApiRequestWrapper url={url} options={options}>
      {data => props.children(data)}
    </ApiRequestWrapper>
  );
};

Browse.New = props => {
  let url = BASE_URL + `/new-releases`;
  let options = { ...props.options };

  return (
    <ApiRequestWrapper url={url} options={options}>
      {data => props.children(data)}
    </ApiRequestWrapper>
  );
};

Browse.Recommendations = props => {
  let url = 'https://api.spotify.com/v1/recommendations';
  let options = { ...props.options };

  return (
    <ApiRequestWrapper url={url} options={options}>
      {data => props.children(data)}
    </ApiRequestWrapper>
  );
};

const basicPropTypes = {
  children: PropTypes.func.isRequired
};

Browse.Category.propTypes = {
  ...basicPropTypes,
  id: PropTypes.string,
  options: PropTypes.object,
  playlists: PropTypes.bool
};

Browse.Featured.propTypes = {
  ...basicPropTypes,
  options: PropTypes.object
};

Browse.New.propTypes = {
  ...basicPropTypes,
  options: PropTypes.object
};

Browse.Recommendations.propTypes = {
  ...basicPropTypes,
  options: PropTypes.object.isRequired
};

export default Browse;
