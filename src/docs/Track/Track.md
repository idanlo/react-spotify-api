### Import
```js static
import { Track } from 'react-spotify-api'
```

### Single Track
```jsx static
function App() {
    return (
        <Track id="4kmBkq3ONzENSIRv2ah8Gh">
            {(track, loading, error) => (
                track ? <h1>{track.name} : null
            )}
        </Track>
    )
}
```

### Multiple Tracks
```jsx static
function App() {
    return (
        <Track id={["4kmBkq3ONzENSIRv2ah8Gh","58LDBCFIHWmFnRGJQPTXvb"]}>
            {(tracks, loading, error) => (
                tracks ? (
                    tracks.map(track => (
                        <h1 key={track.id}>{track.name}</h1>
                    ))
                ) : null
            )}
        </Track>
    )
}

```