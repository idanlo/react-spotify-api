Get Spotify catalog information for single/multiple track/s identified by their unique Spotify ID/s.<br/>
Optional parameter - market, if you don't want to specify you can set to 'from_token'<br/>
[Response format (single track)](https://developer.spotify.com/documentation/web-api/reference/tracks/get-track/#response-format)<br/>
[Response format (multiple tracks)](https://developer.spotify.com/documentation/web-api/reference/tracks/get-several-tracks/#response-format)<br/>

### Import
```js static
import { useTrack } from 'react-spotify-api'
```

### Single Track
```jsx static
function App() {
    const { data, loading, error } = useTrack("4kmBkq3ONzENSIRv2ah8Gh")

    if (data) {
        return <h1>{data.track.name}</h1>
    } 
    return null;
}
```

### Multiple Tracks
```jsx static
function App() {
    const { data, loading, error } = useTrack(["4kmBkq3ONzENSIRv2ah8Gh","58LDBCFIHWmFnRGJQPTXvb"])

    if (data) {
        return data.tracks.map(track => (
                <h1 key={track.id}>{track.name}</h1>
            ))
    } 
    return null;
}
```