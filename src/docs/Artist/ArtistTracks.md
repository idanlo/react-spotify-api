### Import
```js static
import { ArtistTracks } from 'react-spotify-api'
```

```jsx static
<ArtistTracks id="1XpDYCrUJnvCo9Ez6yeMWh">
    {(tracks, loading, error) => (
        tracks ? (
            tracks.tracks.items.map(track => (
                <h1 key={track.id}>{track.name}</h1>
            ))
        ) : null
    )}
</ArtistTracks>
```