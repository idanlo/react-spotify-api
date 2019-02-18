### Import
```js static
import { UserTop } from 'react-spotify-api'
```

### Tracks
```jsx static
<UserTop type="tracks">
    {(tracks, loading, error) =>
        tracks ? (
            tracks.items.map(track => (
                <h1 key={track.id}>{track.name}</h1>
            ))
        ) : null
    }
</UserTop>
```

### Artists
```jsx static
<UserTop type="artists">
    {(artists, loading, error) =>
        artists ? (
            artists.items.map(artist => (
                <h1 key={artist.id}>{artist.name}</h1>
            ))
        ) : null
    }
</UserTop>
```