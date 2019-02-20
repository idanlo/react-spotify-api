## Wrapping your app with a Provider
in order to use the Spotify API you are required to send an access token ([read more here](https://developer.spotify.com/documentation/general/guides/authorization-guide/))
with every single http request, but the `SpotifyApiContext` provider does that for you!
### Import
```js static
import { SpotifyApiContext } from 'react-spotify-api'
```
### Wrap your app with it (all react-spotify-api components must have a SpotifyApiContext.Provider parent)
```jsx static
<SpotifyApiContext.Provider value={token}>
    <App />
</SpotifyApiContext.Provider>
```
You can now use all components without worrying about getting your access token! 