import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import PlaylistImages from './PlaylistImages';

describe('<PlaylistImages />', () => {
    it('passes correct url prop to <ApiRequest />', () => {
        let wrapper;
        act(() => {
            wrapper = mount(
                <PlaylistImages id="3cfAM8b8KqJRoIzt3zLKqw">
                    {() => null}
                </PlaylistImages>
            );
        });
        expect(wrapper.find('ApiRequest').prop('url')).toEqual(
            'https://api.spotify.com/v1/playlists/3cfAM8b8KqJRoIzt3zLKqw/images'
        );
    });

    it('should return a function inside <ApiRequest />', () => {
        let wrapper;
        act(() => {
            wrapper = mount(
                <PlaylistImages id="3cfAM8b8KqJRoIzt3zLKqw">
                    {() => null}
                </PlaylistImages>
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
                <PlaylistImages id="3cfAM8b8KqJRoIzt3zLKqw">
                    {mock}
                </PlaylistImages>
            );
        });
        expect(mock).toHaveBeenCalled();
    });
});
