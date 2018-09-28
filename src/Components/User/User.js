import React from "react";
import ApiRequestWrapper from "../ApiRequest/ApiRequestWrapper";

const BASE_URL = "https://api.spotify.com/v1";

const User = props => {
  let url = BASE_URL;
  if (props.id) {
    url += `/users/${props.id}`;
  } else {
    url += `/me`;
  }

  return (
    <ApiRequestWrapper url={url}>
      {data => props.children(data)}
    </ApiRequestWrapper>
  );
};

User.Playlists = props => {
  let url = BASE_URL;
  if (props.id) {
    url += `/users/${props.id}/playlists`;
  } else {
    url += `/me/playlists`;
  }
  let options = { ...props.options };

  return (
    <ApiRequestWrapper url={url} options={options}>
      {data => props.children(data)}
    </ApiRequestWrapper>
  );
};

export default User;
