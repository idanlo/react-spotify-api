import React from 'react';
import ReactDOM from 'react-dom';
import App, { TestUseTrack, TestUseArtist } from './App';
import { SpotifyApiContext } from './lib';

const app = (
    <SpotifyApiContext.Provider value="BQCfoNoUjvssLIJfW0G7jTFE7rPBjI0FQ0FQcwP9dUEIX0N4tUmAGpKRLsVmAbVSh0oZl-6umveeUvRmfub-zODYovmMLCaL_u-AFjMSeXyMDk7g6FWgATdW2mDEucaAey5CmN-Tcu8t01A4l-R7Si6i5f7dTfTz436u4xRWCXObPA3e0B_C-q3JmZEpWO8tkBzA9QG7O2XyfsgrtrQnmW7A4EdaKmfsTxeT87W_nQbOlUCThwSoxxHKGOniFjkk1CToshcUYEAiFm5QnmtjWOD06TQdLxQa6PQ">
        <TestUseTrack />
        <TestUseArtist />
        <App />
    </SpotifyApiContext.Provider>
);

ReactDOM.render(app, document.getElementById('root'));
