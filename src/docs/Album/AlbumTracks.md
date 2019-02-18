### Import
```js static
import { AlbumTracks } from 'react-spotify-api'
```

```jsx static
<AlbumTracks id="4vxL3cLukzWtF16JD2eb2W">
    {(tracks, loading, error) => (
        tracks ? (
            tracks.tracks.map(tracks => (
                <h1 key={tracks.id}>{tracks.name}</h1>
            ))
        ) : null
    )}
</AlbumTracks>
```