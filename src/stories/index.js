import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { SpotifyApiContext, Artist } from '../lib';

addDecorator(story => (
    <SpotifyApiContext.Provider token="hello">
        {story()}
    </SpotifyApiContext.Provider>
));

storiesOf('Welcome', module).add('to Storybook', () => (
    <button onClick={linkTo('Spotify')}>Welcome</button>
));

storiesOf('Spotify', module)
    .add('Artist', () => (
        <Artist id="123">
            {(data, loading, error) => (error ? <h1>Error</h1> : null)}
        </Artist>
    ))
    .add('with some emoji', () => (
        <button onClick={action('clicked')}>
            <span role="img" aria-label="so cool">
                😀 😎 👍 💯
            </span>
        </button>
    ));
