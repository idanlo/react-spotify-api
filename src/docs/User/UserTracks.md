### Import
```js static
import { UserTracks } from 'react-spotify-api'
```

```jsx static
<UserTracks>
    {(tracks, loading, error) =>
        tracks ? (
            tracks.items.map(track => (
                <h1 key={track.track.id}>{track.track.name}</h1>
            ))
        ) : null
    }
</UserTracks>
```