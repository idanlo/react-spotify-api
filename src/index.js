import React from 'react';
import ReactDOM from 'react-dom';
import App, {
    TestUseAlbum,
    TestUseArtist,
    TestUseUser,
    TestUseSearch
} from './App';
import { SpotifyApiContext } from './lib';

const app = (
    <SpotifyApiContext.Provider value="BQBBRg7uVdUc4jpJ79ZxT9mgRLoCGNEwHFZZ4qZa2tmPArxW9QbLQvy7kJgtzsjKC1dNyt311cJdiHVBLNjksk7S7DwGZX88YWxy9SHGdMk6wN35WzlbekC3xvaWy7lwHN6Fb6xyf5mbUlPdmcjjclwgHhc_kH4dcX82lfN83fVz9-pWTzPkGSSGNg-uKCln9ECKTQfpiv-B0HB2ftMsMfykKTrcJ3Yitv65lvMyOwxGpCNSr3ruHYAY1XRw4bfMteksxIN14o0VJ2xgtKsFjNBmHZF8WA9ienE">
        <TestUseSearch />
        <TestUseUser />
        <TestUseAlbum />
        <TestUseArtist />
        <App />
    </SpotifyApiContext.Provider>
);

ReactDOM.render(app, document.getElementById('root'));
