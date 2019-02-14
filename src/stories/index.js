import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { text, withKnobs, array } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import Welcome from './Welcome';
import { SpotifyApiContext, Artist, Track } from '../lib';

// SpotifyApiContext.Provider.displayName = 'SpotifyApiContext.Provider';

// addDecorator(story => (
//     <SpotifyApiContext.Provider token={text('Spotify access token', '')}>
//         {story()}
//     </SpotifyApiContext.Provider>
// ));
addDecorator(withKnobs);
addDecorator(withInfo);

storiesOf('Welcome', module).add('to react-spotify-api', () => <Welcome />);

storiesOf('Artist', module)
    .addParameters({
        info: {
            source: false,
            text: `
                ~~~jsx
                <Artist id={props.id} >
                    {(data, loading, error) => (
                        // JSX
                    )}
                </Artist>
                ~~~
            `
        }
    })
    .add('Artist', () => (
        <Artist id={text('Artist id', '123')}>
            {(data, loading, error) =>
                error ? <h1>Error</h1> : <h1>Artist</h1>
            }
        </Artist>
    ))
    .add('Artist.Albums', () => (
        <Artist.Albums id={text('Artist id', '123')}>
            {(data, loading, error) =>
                error ? <h1>Error</h1> : <h1>Artist.Albums</h1>
            }
        </Artist.Albums>
    ))
    .add('Artist.Tracks', () => (
        <Artist.Tracks id={text('Artist id', '123')}>
            {(data, loading, error) =>
                error ? <h1>Error</h1> : <h1>Artist.Albums</h1>
            }
        </Artist.Tracks>
    ))
    .add('Artist.Related', () => (
        <Artist.Related id={text('Artist id', '123')}>
            {(data, loading, error) =>
                error ? <h1>Error</h1> : <h1>Artist.Albums</h1>
            }
        </Artist.Related>
    ));

storiesOf('Track', module)
    .addParameters({
        info: {
            source: false,
            text: `
                ~~~jsx
                <Track id={props.id} >
                    {(data, loading, error) => (
                        // JSX
                    )}
                </Track>
                ~~~
            `
        }
    })
    .add('Track', () => (
        <Track id={text('Track id', '123')}>
            {(data, loading, error) =>
                error ? <h1>Error</h1> : <h1>Artist.Albums</h1>
            }
        </Track>
    ));
