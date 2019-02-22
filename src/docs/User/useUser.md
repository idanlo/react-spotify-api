Get detailed profile information about the current user or a user specified by their Spotify ID (including the current user’s username).<br/>
[Response format (current user profile)](https://developer.spotify.com/documentation/web-api/reference/users-profile/get-current-users-profile/#response-format)<br/>
[Response format (different user profile)](https://developer.spotify.com/documentation/web-api/reference/users-profile/get-users-profile/#response-format)<br/>

### Import
```js static
import { useUser } from 'react-spotify-api'
```

### Current User
```jsx static
function App() {
    const { data, loading, error } = useUser()

    if (data) {
        return <h1>{data.birthdate}</h1>
    } 
    return null;
}
```

### Different User
```jsx static
function App() {
    const { data, loading, error } = useUser('spotify')

    if (data) {
        return <h1>{data.birthdate}</h1>
    } 
    return null;
}
```