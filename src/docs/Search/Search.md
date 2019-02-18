### Import
```js static
import { Search } from 'react-spotify-api'
```

### Search keyword 'ed' for albums and artists
```jsx static
<Search query="ed" album artist>
    {(data, loading, error) =>
        data ? (
            <ul>
                <li>Albums</li>
                <ul>
                    {data.albums.items.map(album => (
                        <li key={album.id}>{album.name}</li>
                    ))}
                </ul>
                <li>Artists</li>
                <ul>
                    {data.artists.items.map(artist => (
                        <li key={artist.id}>{artist.name}</li>
                    ))}
                </ul>
            </ul>
        ) : null
    }
</Search>
```