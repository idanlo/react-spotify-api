### Import
```js static
import { BrowseRecommendations } from 'react-spotify-api'
```

```jsx static
<BrowseRecommendations
    options={{
        seed_artists:
            '0L8ExT028jH3ddEcZwqJJ5,34gCWollNqYlcodydhFabx'
    }}>
    {(recommendations, loading, error) => (
        recommendations ? (
            recommendations.tracks.map(track => (
                <h1 key={track.id}>{track.name}</h1>
            ))
        ) : null
    )
    }}
</BrowseRecommendations>
```