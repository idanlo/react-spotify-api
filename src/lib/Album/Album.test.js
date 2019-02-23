import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import Album from './Album';

describe('<Album />', () => {
    it('passes correct url prop to <ApiRequest /> (single album)', () => {
        let wrapper;
        act(() => {
            wrapper = mount(
                <Album id="3cfAM8b8KqJRoIzt3zLKqw">{() => null}</Album>
            );
        });
        expect(wrapper.find('ApiRequest').prop('url')).toEqual(
            'https://api.spotify.com/v1/albums/3cfAM8b8KqJRoIzt3zLKqw'
        );
    });

    it('passes correct url prop to <ApiRequest /> (multiple albums)', () => {
        let wrapper;
        act(() => {
            wrapper = mount(
                <Album
                    id={['3cfAM8b8KqJRoIzt3zLKqw', '4vxL3cLukzWtF16JD2eb2W']}
                >
                    {() => null}
                </Album>
            );
        });
        // it should remain the base url because the ids are passed to the
        // options object
        expect(wrapper.find('ApiRequest').prop('url')).toEqual(
            'https://api.spotify.com/v1/albums'
        );
    });

    it('passes correct options prop to <ApiRequest /> (multiple albums)', () => {
        let wrapper;
        act(() => {
            wrapper = mount(
                <Album
                    id={['3cfAM8b8KqJRoIzt3zLKqw', '4vxL3cLukzWtF16JD2eb2W']}
                >
                    {() => null}
                </Album>
            );
        });
        expect(wrapper.find('ApiRequest').prop('options').ids).toEqual(
            '3cfAM8b8KqJRoIzt3zLKqw,4vxL3cLukzWtF16JD2eb2W'
        );
    });

    it('should return a function inside <ApiRequest />', () => {
        let wrapper;
        act(() => {
            wrapper = mount(
                <Album id="3cfAM8b8KqJRoIzt3zLKqw">{() => null}</Album>
            );
        });
        expect(typeof wrapper.find('ApiRequest').prop('children')).toEqual(
            'function'
        );
    });

    it('calls the mock function passed through the children prop', () => {
        const mock = jest.fn(() => null);

        act(() => {
            mount(<Album id="3cfAM8b8KqJRoIzt3zLKqw">{mock}</Album>);
        });
        expect(mock).toHaveBeenCalled();
    });
});
