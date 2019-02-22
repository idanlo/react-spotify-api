Get Spotify Catalog information about artists, albums, tracks or playlists that match a keyword string.<br/>
[Writing a query - guidelines](https://developer.spotify.com/documentation/web-api/reference/search/search/#writing-a-query---guidelines)<br/>
[Response format](https://developer.spotify.com/documentation/web-api/reference/search/search/#response-format)<br/>

### Import
```js static
import { useSearch } from 'react-spotify-api'
```

```jsx static
function App() {
    const { data, loading, error } = useSearch("jack", {artist: true, limit: 5})

    if (data) {
         return data.artists.items.map(artist => (
            <h1 key={artist.id}>{artist.name}</h1>
        ));
    }
    return null;
}
