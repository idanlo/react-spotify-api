import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { TestUseTrack, TestUseArtist } from './App';
import { SpotifyApiContext } from './lib';
import * as serviceWorker from './serviceWorker';

const app = (
    <SpotifyApiContext.Provider value="BQCFKHH_VO3UW7v5o8yHLnX-QqCqKiGV53W-XVh306GGFEEgoISJ3e6IusGDnepez8_RrIhdcrRL7OADdBqFuf05eb7bx0F3X_-Y0Ax9Nv893PdYdVK3IxXOARU0gDQWHt0VHhDcxSBm0mFnRVoEya9u6EzHFU73B63yZCDV5TlaMAwbnEkF87CeE6F4duzFzadLx0Vzn2jWs83DFkKiK7ZJeleqfCC67lApUvVLBJMzAIItePcsH67j9CtQNQnzNwnkLiUynJadpccjkaAp8H36F5B_GMwdhtsbvME">
        <TestUseTrack />
        <TestUseArtist />
    </SpotifyApiContext.Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
