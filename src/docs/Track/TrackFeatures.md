### Import
```js static
import { TrackFeatures } from 'react-spotify-api'
```

### Single Track
```jsx static
<TrackFeatures id="4kmBkq3ONzENSIRv2ah8Gh">
    {(features, loading, error) => (
        features ? (
            <h1>{features.key}</h1>
        ) : null
    )}
</TrackFeatures>
```

### Multiple Tracks
```jsx static
<TrackFeatures id={["4kmBkq3ONzENSIRv2ah8Gh","58LDBCFIHWmFnRGJQPTXvb"]}>
    {(features, loading, error) => (
        features ? (
            features.audio_features.map(feature => (
                <h1 key={feature.id}>{feature.key}</h1>
            ))
        ) : null
    )}
</TrackFeatures>
```