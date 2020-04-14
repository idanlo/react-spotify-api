# Version 3.0.0 Breaking Change

Before version 3.0.0 the parameters to `props.children` were passed in this order - `data, loading, error`. It is now passed as an object, so you would now use the `Album` component like this -

```jsx static
<Album id={...}>
  {({ data }) => {
    return <></>;
  }}
</Album>
```

As opposed to the previous versions where you would use the components like this -

```jsx static
<Album id={...}>
  {(data, loading, error) => {
    return <></>;
  }}
</Album>
```

This way you can choose which parameters you would like to have, and if you want just the error parameter you can omit the other two. This works well with the `loadMoreData` parameter, you don't need to write all 4 parameters if you just need some of them.

# Usage

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

## Infinite loading

Currently, every response that has an `items` and `next` properties on their data object (for example `AlbumTracks`) also returns a `loadMoreData` function to their children prop.
So you could use a library like [react-infinite](https://github.com/seatgeek/react-infinite) (which I am using in my [react-spotify demo](https://react-spotify.netlify.com)), and when the user reaches the end you can call the `loadMoreData` function, which will use the `next` property on the data object (which is a URL to call for the next results) and will append those results to the current result, so after calling `loadMoreData` your UI will automatically update!

#### Note

The `loadMoreData` gets returned on every components but is not always supported so it may cause errors, please check on the Spotify API that the object you are fetching has an `items` and `next` properties on their data object.
