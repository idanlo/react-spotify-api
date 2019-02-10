import React from 'react';
import PropTypes from 'prop-types';
import ApiRequestWrapper from '../ApiRequest/ApiRequestWrapper';

const BASE_URL = 'https://api.spotify.com/v1';

const User = props => {
  let url = BASE_URL;
  let options = { ...props.options };
  if (props.id) {
    url += `/users/${props.id}`;
  } else {
    url += `/me`;
  }

  return (
    <ApiRequestWrapper url={url} options={options}>
      {data => props.children(data)}
    </ApiRequestWrapper>
  );
};

User.Playlists = props => {
  let url = BASE_URL;
  let options = { ...props.options };
  if (props.id) {
    url += `/users/${props.id}/playlists`;
  } else {
    url += `/me/playlists`;
  }

  return (
    <ApiRequestWrapper url={url} options={options}>
      {data => props.children(data)}
    </ApiRequestWrapper>
  );
};

User.Tracks = props => {
  let url = BASE_URL + `/me/tracks`;
  let options = { ...props.options };

  return (
    <ApiRequestWrapper url={url} options={options}>
      {data => props.children(data)}
    </ApiRequestWrapper>
  );
};

User.Albums = props => {
  let url = BASE_URL + `/me/albums`;
  let options = { ...props.options };

  return (
    <ApiRequestWrapper url={url} options={options}>
      {data => props.children(data)}
    </ApiRequestWrapper>
  );
};

User.Artists = props => {
  let url = BASE_URL + `/me/following/`;
  let options = { ...props.options, type: 'artist' };

  return (
    <ApiRequestWrapper url={url} options={options}>
      {data => props.children(data)}
    </ApiRequestWrapper>
  );
};

User.Top = props => {
  let url = BASE_URL + `/me/top/${props.type}`;
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

User.propTypes = {
  ...basicPropTypes,
  id: PropTypes.string,
  options: PropTypes.object
};

User.Playlists.propTypes = {
  ...basicPropTypes,
  id: PropTypes.string,
  options: PropTypes.object
};

User.Tracks.propTypes = {
  ...basicPropTypes,
  options: PropTypes.object
};

User.Albums.propTypes = {
  ...basicPropTypes,
  options: PropTypes.object
};

User.Artists.propTypes = {
  ...basicPropTypes,
  options: PropTypes.object
};

User.Top.propTypes = {
  ...basicPropTypes,
  options: PropTypes.object,
  type: PropTypes.string.isRequired
};

export default User;
