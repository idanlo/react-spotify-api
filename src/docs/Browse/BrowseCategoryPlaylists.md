### Import
```js static
import { BrowseCategoryPlaylists } from 'react-spotify-api'
```

```jsx static
<BrowseCategoryPlaylists id="party">
    {(playlists, loading, error) => (
        playlists ? (
            playlists.playlists.items.map(playlist => (
                <h1 key={playlist.id}>{playlist.name}</h1>
            ))
        ) : null
    )}
</BrowseCategoryPlaylists>
```