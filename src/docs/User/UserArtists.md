### Import
```js static
import { UserArtists } from 'react-spotify-api'
```

```jsx static
<UserArtists>
    {(artists, loading, error) =>
        artists ? (
            artists.artists.items.map(artist => (
                <h1 key={artist.id}>{artist.name}</h1>
            ))
        ) : null
    }
</UserArtists>
```
