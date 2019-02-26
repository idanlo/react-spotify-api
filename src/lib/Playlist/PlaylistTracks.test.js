import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import PlaylistTracks from './PlaylistTracks';

describe('<PlaylistTracks />', () => {
    it('passes correct url prop to <ApiRequest />', () => {
        let wrapper;
        act(() => {
            wrapper = mount(
                <PlaylistTracks id="3cfAM8b8KqJRoIzt3zLKqw">
                    {() => null}
                </PlaylistTracks>
            );
        });
        expect(wrapper.find('ApiRequest').prop('url')).toEqual(
            'https://api.spotify.com/v1/playlists/3cfAM8b8KqJRoIzt3zLKqw/tracks'
        );
    });

    it('passes correct options prop to <ApiRequest />', () => {
        let wrapper;
        act(() => {
            wrapper = mount(
                <PlaylistTracks
                    id="3cfAM8b8KqJRoIzt3zLKqw"
                    options={{ market: 'from_token', limit: 1 }}
                >
                    {() => null}
                </PlaylistTracks>
            );
        });
        expect(wrapper.find('ApiRequest').prop('options')).toEqual({
            market: 'from_token',
            limit: 1
        });
    });

    it('should return a function inside <ApiRequest />', () => {
        let wrapper;
        act(() => {
            wrapper = mount(
                <PlaylistTracks id="3cfAM8b8KqJRoIzt3zLKqw">
                    {() => null}
                </PlaylistTracks>
            );
        });
        expect(typeof wrapper.find('ApiRequest').prop('children')).toEqual(
            'function'
        );
    });

    it('calls the mock function passed through the children prop', () => {
        const mock = jest.fn(() => null);

        act(() => {
            mount(
                <PlaylistTracks id="3cfAM8b8KqJRoIzt3zLKqw">
                    {mock}
                </PlaylistTracks>
            );
        });
        expect(mock).toHaveBeenCalled();
    });
});
