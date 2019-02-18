### Import
```js static
import { Playlist } from 'react-spotify-api'
```

```jsx static
<Playlist id="060QHhmOlYMEfFdxl4NpAS">
    {(playlist, loading, error) => (
        playlist ? <h1>{playlist.name} : null
    )}
</Playlist>
```