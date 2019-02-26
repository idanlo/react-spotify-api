import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import TrackFeatures from './TrackFeatures';

describe('<TrackFeatures />', () => {
    it('passes correct url prop to <ApiRequest /> (single track feature)', () => {
        let wrapper;
        act(() => {
            wrapper = mount(
                <TrackFeatures id="3cfAM8b8KqJRoIzt3zLKqw">
                    {() => null}
                </TrackFeatures>
            );
        });
        expect(wrapper.find('ApiRequest').prop('url')).toEqual(
            'https://api.spotify.com/v1/audio-features/3cfAM8b8KqJRoIzt3zLKqw'
        );
    });

    it('passes correct url prop to <ApiRequest /> (multiple track features)', () => {
        let wrapper;
        act(() => {
            wrapper = mount(
                <TrackFeatures
                    id={['3cfAM8b8KqJRoIzt3zLKqw', '4vxL3cLukzWtF16JD2eb2W']}
                >
                    {() => null}
                </TrackFeatures>
            );
        });
        // it should remain the base url because the ids are passed to the
        // options object
        expect(wrapper.find('ApiRequest').prop('url')).toEqual(
            'https://api.spotify.com/v1/audio-features'
        );
    });

    it('should return a function inside <ApiRequest />', () => {
        let wrapper;
        act(() => {
            wrapper = mount(
                <TrackFeatures id="3cfAM8b8KqJRoIzt3zLKqw">
                    {() => null}
                </TrackFeatures>
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
                <TrackFeatures id="3cfAM8b8KqJRoIzt3zLKqw">
                    {mock}
                </TrackFeatures>
            );
        });
        expect(mock).toHaveBeenCalled();
    });
});
