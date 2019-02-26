import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import Playlist from './Playlist';

describe('<Playlist />', () => {
    it('passes correct url prop to <ApiRequest />', () => {
        let wrapper;
        act(() => {
            wrapper = mount(
                <Playlist id="3cfAM8b8KqJRoIzt3zLKqw">{() => null}</Playlist>
            );
        });
        expect(wrapper.find('ApiRequest').prop('url')).toEqual(
            'https://api.spotify.com/v1/playlists/3cfAM8b8KqJRoIzt3zLKqw'
        );
    });

    it('passes correct options prop to <ApiRequest />', () => {
        let wrapper;
        act(() => {
            wrapper = mount(
                <Playlist
                    id="3cfAM8b8KqJRoIzt3zLKqw"
                    options={{ market: 'from_token' }}
                >
                    {() => null}
                </Playlist>
            );
        });
        expect(wrapper.find('ApiRequest').prop('options').market).toEqual(
            'from_token'
        );
    });

    it('should return a function inside <ApiRequest />', () => {
        let wrapper;
        act(() => {
            wrapper = mount(
                <Playlist id="3cfAM8b8KqJRoIzt3zLKqw">{() => null}</Playlist>
            );
        });
        expect(typeof wrapper.find('ApiRequest').prop('children')).toEqual(
            'function'
        );
    });

    it('calls the mock function passed through the children prop', () => {
        const mock = jest.fn(() => null);

        act(() => {
            mount(<Playlist id="3cfAM8b8KqJRoIzt3zLKqw">{mock}</Playlist>);
        });
        expect(mock).toHaveBeenCalled();
    });
});
