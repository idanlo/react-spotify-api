### Import
```js static
import { Album } from 'react-spotify-api'
```

### Single Album
```jsx static
<Album id="4vxL3cLukzWtF16JD2eb2W">
    {(album, loading, error) => (
        album ? <h1>{album.name} : null
    )}
</Album>
```

### Multiple Albums
```jsx static
<Album id={["4vxL3cLukzWtF16JD2eb2W","7mv1ciCld5Bp1y6TDGtjQY"]}>
    {(albums, loading, error) => (
        albums ? (
            albums.albums.map(albums => (
                <h1 key={albums.id}>{albums.name}</h1>
            ))
        ) : null
    )}
</Album>
```