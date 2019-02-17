### Import
```js static
import { ArtistRelated } from 'react-spotify-api'
```

```jsx static
<ArtistRelated id="1XpDYCrUJnvCo9Ez6yeMWh">
    {(artists, loading, error) => (
        artists ? (
            artists.artists.items.map(artist => (
                <h1 key={artist.id}>{artist.name}</h1>
            ))
        ) : null
    )}
</ArtistRelated>
```