### Import
```js static
import { BrowseNew } from 'react-spotify-api'
```

```jsx static
<BrowseNew options={{ limit: 5 }}>
    {(albums, loading, error) => (
        albums ? (
            albums.albums.items.map(album => (
                <h1 key={album.id}>{album.name}</h1>
            ))
        ) : null
    )}
</BrowseNew>
```