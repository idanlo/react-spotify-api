### Import
```js static
import { TrackAnalysis } from 'react-spotify-api'
```

```jsx static
<TrackAnalysis id="4kmBkq3ONzENSIRv2ah8Gh">
    {(analysis, loading, error) => (
        analysis ? (
            <h1>{analysis.track.duration}</h1>
        ) : null
    )}
</TrackAnalysis>
```