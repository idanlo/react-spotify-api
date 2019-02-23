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
    <SpotifyApiContext.Provider value="BQCiGipRo4CeB6bSyOdEbsITaY0Rz9GVEYcgnYMoZ-ss_ypUG9LeDTtAPQ9jdNbUpuyK1enEZGBlRzbEOwV9x5lycBYJy79c9GDfq_zYZ0y-N9msYx_qXEeQvbLtG-lJwDhwzDtGmy84vjOunRfJ4TQS8a4wPU3cdJ4Awos4RDWwlAsrXiWQRPoUGcCy2uP1AjHgCMAUSkm6-VCWvud_BTsMpdzMRC3AX3RqA8k-A3AaZwL09xKG2U2ZkPyXnY_7Y8VOBgJzDONKGBtXjx6xJmeJpD3dK8CwZF0">
        <TestUseSearch />
        <TestUseUser />
        <TestUseAlbum />
        <TestUseArtist />
        <App />
    </SpotifyApiContext.Provider>
);

ReactDOM.render(app, document.getElementById('root'));
