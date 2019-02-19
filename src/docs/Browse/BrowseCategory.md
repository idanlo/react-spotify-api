### Import
```js static
import { BrowseCategory } from 'react-spotify-api'
```

```jsx static
 <BrowseCategory id="chill">
    {(category, loading, error) => (
        category ? (
            <ul>
                {category.icons.length > 0 ? (
                    <img
                        src={category.icons[0].url}
                        alt="Category"
                    />
                ) : null}
                <li>{category.name}</li>
            </ul>
        ) : null
    )}
</BrowseCategory>
```