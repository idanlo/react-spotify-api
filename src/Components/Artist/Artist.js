import React from "react";
import ApiRequestWrapper from "../ApiRequest/ApiRequestWrapper";
import ApiRequest from "../ApiRequest/ApiRequest";
import { SpotifyApiContext } from "../../index";

const BASE_URL = "https://api.spotify.com/v1/artists";

const Artist = props => {
  let url = BASE_URL;
  let options = {};
  if (Array.isArray(props.id)) {
    options.ids = props.id.join(",");
  } else {
    url += `/${props.id}`;
  }
  return (
    <ApiRequestWrapper url={url} options={options}>
      {data => props.children(data)}
    </ApiRequestWrapper>
  );
};

Artist.Albums = props => {
  let url = BASE_URL + `/${props.id}/albums`;
  let options = {};
  return (
    <ApiRequestWrapper url={url} options={options}>
      {data => props.children(data)}
    </ApiRequestWrapper>
  );
};

Artist.Tracks = props => {
  let url = BASE_URL + `/${props.id}/top-tracks`;
  let options = {
    market: "from_token"
  };
  return (
    <ApiRequestWrapper url={url} options={options}>
      {data => props.children(data)}
    </ApiRequestWrapper>
  );
};

Artist.Related = props => {
  let url = BASE_URL + `/${props.id}/related-artists`;
  let options = {};

  return (
    <ApiRequestWrapper url={url} options={options}>
      {data => props.children(data)}
    </ApiRequestWrapper>
  );
};

export default Artist;
