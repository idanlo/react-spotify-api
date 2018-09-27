import React from "react";
import ApiRequestWrapper from "../ApiRequest/ApiRequestWrapper";

const BASE_URL = "https://api.spotify.com/v1/tracks";

const Track = props => {
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

Track.Features = props => {
  let url = BASE_URL + "/audio-features";
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

Track.Analysis = props => {
  let url = BASE_URL + "/audio-analysis" + `/${props.id}`;
  let options = {};

  return (
    <ApiRequestWrapper url={url} options={options}>
      {data => props.children(data)}
    </ApiRequestWrapper>
  );
};

export default Track;
