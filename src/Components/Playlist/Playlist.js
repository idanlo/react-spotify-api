import React from "react";
import ApiRequestWrapper from "../ApiRequest/ApiRequestWrapper";

const BASE_URL = "https://api.spotify.com/v1/playlists";

const Playlist = props => {
  let url = BASE_URL + `/${props.id}`;
  let options = { ...props.options };

  return (
    <ApiRequestWrapper url={url} options={options}>
      {data => props.children(data)}
    </ApiRequestWrapper>
  );
};

Playlist.Tracks = props => {
  let url = BASE_URL + `/${props.id}/tracks`;
  let options = { ...props.options };

  return (
    <ApiRequestWrapper url={url} options={options}>
      {data => props.children(data)}
    </ApiRequestWrapper>
  );
};

Playlist.Images = props => {
  let url = BASE_URL + `/${props.id}/images`;
  // no options for this endpoint

  return (
    <ApiRequestWrapper url={url}>
      {data => props.children(data)}
    </ApiRequestWrapper>
  );
};

export default Playlist;
