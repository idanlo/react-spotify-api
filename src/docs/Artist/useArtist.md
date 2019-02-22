Get Spotify catalog information for single/multiple artist/s identified by their unique Spotify ID/s.<br/>
There are no optional parameters for this type.<br/>
[Response format (single artist)](https://developer.spotify.com/documentation/web-api/reference/artists/get-artist/#response-format)<br/>
[Response format (multiple artists)](https://developer.spotify.com/documentation/web-api/reference/artists/get-several-artists/#response-format)<br/>

### Import
```js static
import { useArtist } from 'react-spotify-api'
```

### Single Artist
```jsx static
function App() {
    const { data, loading, error } = useArtist("1XpDYCrUJnvCo9Ez6yeMWh")

    if (data) {
        return <h1>{data.artist.name}</h1>
    } 
    return null;
}
```

### Multiple Artists
```jsx static
function App() {
    const { data, loading, error } = useArtist(["1XpDYCrUJnvCo9Ez6yeMWh","7jy3rLJdDQY21OgRLCZ9sD"])

    if (data) {
        return data.artists.map(artist => (
                <h1 key={artist.id}>{artist.name}</h1>
            ))
    } 
    return null;
}
```