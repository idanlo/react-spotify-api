import React from 'react';
import ReactDOM from 'react-dom';
import App, { TestUseAlbum, TestUseArtist, TestUseUser } from './App';
import { SpotifyApiContext } from './lib';

const app = (
    <SpotifyApiContext.Provider value="BQB4M6ktLC7rjabgGvgzva9kcaRhjqxo48_eD_zeFStYJQUScIbw_i9SJuWPG9y7W-MkwTKS4WLiAVs3KI-EZyfZxlT0-PyOs75ne8cGaVxJD3xCQJ4VRL1grpLmk0vCkCfkQtu2OELZD_1T5U-Dl-MV3KgRrGUhVKRrUVl7BIlBebClqE6TD3uPOEUYb7bHy5e-5Y5UVQlMLGmkw_Qsr8qiV703QoR1eczqEh0D1f34YnV8Ug7bymD04FO1FuodTBbyTTuL7bdMtEGBSDD6oBDX2QaQQuKgSkM">
        <TestUseUser />
        <TestUseAlbum />
        <TestUseArtist />
        <App />
    </SpotifyApiContext.Provider>
);

ReactDOM.render(app, document.getElementById('root'));
