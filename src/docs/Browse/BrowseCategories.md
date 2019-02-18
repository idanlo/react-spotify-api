### Import
```js static
import { BrowseCategories } from 'react-spotify-api'
```

```jsx static
<BrowseCategories>
    {(categories, loading, error) => (
        categories ? (
            categories.categories.items.map(category => (
                <h1 key={category.id}>{category.name}</h1>
            ))
        ) : null
    )}
</BrowseCategories>
```