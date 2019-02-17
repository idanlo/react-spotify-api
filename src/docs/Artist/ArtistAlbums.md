### Import
```js static
import { ArtistAlbums } from 'react-spotify-api'
```

```jsx static
<ArtistAlbums id="1XpDYCrUJnvCo9Ez6yeMWh">
    {(albums, loading, error) => (
        albums ? (
            albums.items.map(album => (
                <h1 key={album.id}>{album.name}</h1>
            ))
        ) : null
    )}
</ArtistAlbums>
```