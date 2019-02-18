### Import
```js static
import { UserPlaylists } from 'react-spotify-api'
```

### Current User
```jsx static
<UserPlaylists>
    {(playlists, loading, error) =>
        playlists ? (
            playlists.items.map(playlist => (
                <h1 key={playlist.id}>{playlist.name}</h1>
            ))
        ) : null
    }
</UserPlaylists>
```

### Different User
```jsx static
<UserPlaylists id="spotify">
    {(playlists, loading, error) =>
        playlists ? (
            playlists.items.map(playlist => (
                <h1 key={playlist.id}>{playlist.name}</h1>
            ))
        ) : null
    }
</UserPlaylists>
```