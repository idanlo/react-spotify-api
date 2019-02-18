### Import
```js static
import { UserAlbums } from 'react-spotify-api'
```

```jsx static
<UserAlbums>
    {(albums, loading, error) =>
        albums ? (
            albums.items.map(album => (
                <h1 key={album.album.id}>{album.album.name}</h1>
            ))
        ) : null
    }
</UserAlbums>
```