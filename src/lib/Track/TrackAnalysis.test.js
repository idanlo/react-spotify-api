import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import TrackAnalysis from './TrackAnalysis';

describe('<TrackAnalysis />', () => {
    it('passes correct url prop to <ApiRequest />', () => {
        let wrapper;
        act(() => {
            wrapper = mount(
                <TrackAnalysis id="3cfAM8b8KqJRoIzt3zLKqw">
                    {() => null}
                </TrackAnalysis>
            );
        });
        expect(wrapper.find('ApiRequest').prop('url')).toEqual(
            `https://api.spotify.com/v1/audio-analysis/3cfAM8b8KqJRoIzt3zLKqw`
        );
    });

    it('should return a function inside <ApiRequest />', () => {
        let wrapper;
        act(() => {
            wrapper = mount(
                <TrackAnalysis id="3cfAM8b8KqJRoIzt3zLKqw">
                    {() => null}
                </TrackAnalysis>
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
                <TrackAnalysis id="3cfAM8b8KqJRoIzt3zLKqw">
                    {mock}
                </TrackAnalysis>
            );
        });
        expect(mock).toHaveBeenCalled();
    });
});
