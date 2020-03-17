## Wrapping your app with a Provider

in order to use the Spotify API you are required to send an access token ([read more here](https://developer.spotify.com/documentation/general/guides/authorization-guide/))
with every single http request, but the `SpotifyApiContext` provider does that for you!

### Import

```js static
import { SpotifyApiContext } from 'react-spotify-api';
```

### Wrap your app with it (all react-spotify-api components must have a SpotifyApiContext.Provider parent)`

```jsx static
<SpotifyApiContext.Provider value={token}>
  <App />
</SpotifyApiContext.Provider>
```

You can now use all components without worrying about getting your access token!

## Usage with Axios

[Axios](https://github.com/axios/axios) has a feature called interceptors, which lets you set events for HTTP requests and responses, so with that feature you can set an event listener for the 401 status code (which Spotify's API throws if the access token is invalid) on your axios instance, and then refresh the token whenever there is a 401 error.

### Passing the axios instance to react-spotify-api

react-spotify-api exposes another React Context variable, called `SpotifyApiAxiosContext`, which accepts the axios instance, so your main component should look like this

```jsx static
<SpotifyApiAxiosContext.Provider value={axios}>
  <SpotifyApiContext.Provider value={token}>
    <App />
  </SpotifyApiContext.Provider>
</SpotifyApiAxiosContext.Provider>
```

#### Note

react-spotify-api uses the axios instance when available, but if it's not, it uses the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).
Also, if the `axios` context exists, it automatically uses it, without checking the validity of the `axios` instance, so if you pass random values to the `SpotifyApiAxiosContext` context, you will experience errors while fetching data.
