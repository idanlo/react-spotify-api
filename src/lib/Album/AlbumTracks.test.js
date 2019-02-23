import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import AlbumTracks from './AlbumTracks';

describe('<Album />', () => {
    it('passes correct url prop to <ApiRequest />', () => {
        let wrapper;
        act(() => {
            wrapper = mount(
                <AlbumTracks id="3cfAM8b8KqJRoIzt3zLKqw">
                    {() => null}
                </AlbumTracks>
            );
        });
        expect(wrapper.find('ApiRequest').prop('url')).toEqual(
            `https://api.spotify.com/v1/albums/3cfAM8b8KqJRoIzt3zLKqw/tracks`
        );
    });

    it('passes correct options object to <ApiRequest />', () => {
        let wrapper;
        act(() => {
            wrapper = mount(
                <AlbumTracks
                    options={{ limit: 1, market: 'US' }}
                    id="3cfAM8b8KqJRoIzt3zLKqw"
                >
                    {() => null}
                </AlbumTracks>
            );
        });
        expect(wrapper.prop('options')).toEqual({
            limit: 1,
            market: 'US'
        });
    });

    it('should return a function inside <ApiRequest />', () => {
        let wrapper;
        act(() => {
            wrapper = mount(
                <AlbumTracks id="3cfAM8b8KqJRoIzt3zLKqw">
                    {() => null}
                </AlbumTracks>
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
                <AlbumTracks id="3cfAM8b8KqJRoIzt3zLKqw">{mock}</AlbumTracks>
            );
        });
        expect(mock).toHaveBeenCalled();
    });
});
