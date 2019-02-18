### Import
```js static
import { User } from 'react-spotify-api'
```

### Current User
```jsx static
<User>
    {(user, loading, error) =>
        user ? (
            <ul>
                <li>Name - {user.display_name}</li>
                <li>ID - {user.id}</li>
            </ul>
        ) : null
    }
</User>
```

### Different User
```jsx static
<User id="spotify">
    {user =>
        user ? (
            <ul>
                <li>Name - {user.display_name}</li>
                <li>ID - {user.id}</li>
            </ul>
        ) : null
    }
</User>
```