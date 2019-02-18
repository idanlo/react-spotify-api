### Import
```js static
import { PlaylistImages } from 'react-spotify-api'
```

```jsx static
<PlaylistImages id="060QHhmOlYMEfFdxl4NpAS">
    {(images, loading, error) => (
        images ? (
            images.map(img => (
                <img key={img.url} href={img.url} />
            ))
        ) : null
    )}
</PlaylistImages>
```