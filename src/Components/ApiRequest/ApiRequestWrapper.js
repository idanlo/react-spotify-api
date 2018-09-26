import React from "react";
import { SpotifyApiContext } from "../../index";
import ApiRequest from "./ApiRequest";

const ApiRequestWrapper = props => {
  return (
    <SpotifyApiContext.Consumer>
      {token => (
        <ApiRequest token={token} {...props}>
          {data => {
            return props.children(data);
          }}
        </ApiRequest>
      )}
    </SpotifyApiContext.Consumer>
  );
};

export default ApiRequestWrapper;
