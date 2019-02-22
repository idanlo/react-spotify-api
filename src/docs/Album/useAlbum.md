Get Spotify catalog information for single/multiple album/s identified by their Spotify ID/s.<br/>
There are no optional parameters for this type<br/>
[Response format (single album)](https://developer.spotify.com/documentation/web-api/reference/albums/get-album/#response-format)<br/>
[Response format (multiple albums)](https://developer.spotify.com/documentation/web-api/reference/albums/get-several-albums/#response-format)<br/>

### Import
```js static
import { useAlbum } from 'react-spotify-api'
```

### Single Album
```jsx static
function App() {
    const { data, loading, error } = useAlbum("4vxL3cLukzWtF16JD2eb2W")

    if (data) {
        return <h1>{data.album.name}</h1>
    } 
    return null;
}
```

### Multiple Albums
```jsx static
function App() {
    const { data, loading, error } = useAlbum(["4vxL3cLukzWtF16JD2eb2W","7mv1ciCld5Bp1y6TDGtjQY"])

    if (data) {
        return data.albums.map(album => (
                <h1 key={album.id}>{album.name}</h1>
            ))
    } 
    return null;
}
```