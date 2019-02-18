### Import
```js static
import { PlaylistTracks } from 'react-spotify-api'
```

```jsx static
<PlaylistTracks id="060QHhmOlYMEfFdxl4NpAS">
    {(tracks, loading, error) => (
        tracks ? (
            tracks.items.map(track => (
                <h1 key={track.track.id}>{track.track.name}</h1>
            ))
        ) : null
    )}
</PlaylistTracks>
```