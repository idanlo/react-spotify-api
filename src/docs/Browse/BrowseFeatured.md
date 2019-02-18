### Import
```js static
import { BrowseFeatured } from 'react-spotify-api'
```

```jsx static
<BrowseFeatured>
    {(playlists, loading, error) => (
        playlists ? (
            playlists.playlists.items.map(playlist => (
                <h1 key={playlist.id}>{playlist.name}</h1>
            ))
        ) : null
    )}
</BrowseFeatured>
```