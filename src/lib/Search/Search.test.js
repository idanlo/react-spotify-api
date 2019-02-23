import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import Search from './Search';

describe('<Search />', () => {
    it('passes correct url prop to <ApiRequest />', () => {
        let wrapper;
        act(() => {
            wrapper = mount(<Search query="jack">{() => null}</Search>);
        });
        expect(wrapper.find('ApiRequest').prop('url')).toEqual(
            'https://api.spotify.com/v1/search'
        );
    });

    it('passes query prop (inside options object) to <ApiRequest />', () => {
        let wrapper;
        act(() => {
            wrapper = mount(<Search query="jack">{() => null}</Search>);
        });
        expect(wrapper.find('ApiRequest').prop('options').q).toEqual('jack');
    });

    it('passes correct query type (inside options object) <ApiRequest />', () => {
        let wrapper;
        act(() => {
            wrapper = mount(
                <Search query="jack" album artist>
                    {() => null}
                </Search>
            );
        });
        expect(wrapper.find('ApiRequest').prop('options').type).toEqual(
            'album,artist'
        );
    });

    it('should return a function inside <ApiRequest />', () => {
        let wrapper;
        act(() => {
            wrapper = mount(
                <Search query="jack" album artist>
                    {() => null}
                </Search>
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
                <Search query="jack" album artist>
                    {mock}
                </Search>
            );
        });
        expect(mock).toHaveBeenCalled();
    });
});
