### Import
```js static
import { Artist } from 'react-spotify-api'
```

### Single Artist
```jsx static
<Artist id="1XpDYCrUJnvCo9Ez6yeMWh">
    {(artist, loading, error) => (
        artist ? <h1>{artist.name} : null
    )}
</Artist>
```

### Multiple Artists
```jsx static
<Artist id={["1XpDYCrUJnvCo9Ez6yeMWh","7jy3rLJdDQY21OgRLCZ9sD"]}>
    {(artists, loading, error) => (
        artists ? (
            artists.map(artist => (
                <h1 key={artist.id}>{artist.name}</h1>
            ))
        ) : null
    )}
</Artist>
```