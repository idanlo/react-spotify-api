### Import
```js static
import { UserArtists } from 'react-spotify-api'
```

```jsx static
<UserArtists>
    {({ data, loading, error, loadMoreData }) =>
        artists ? (
            data.items.map(artist => (
                <h1 key={artist.id}>{artist.name}</h1>
            ))
        ) : null
    }
</UserArtists>
```
