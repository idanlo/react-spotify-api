import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import SpotifyApiContext from '../context';
import useSearch from './useSearch';

const Comp = () => {
    const { data, loading, error } = useSearch('jack', {
        album: true,
        artist: true,
        playlist: true,
        track: true
    });

    if (data) return <h1>data</h1>;
    if (loading) return <h1>loading</h1>;
    if (error) return <h1>error</h1>;
    else return <h1>none</h1>;
};

const Wrapper = () => (
    <SpotifyApiContext.Provider value="123">
        <Comp />
    </SpotifyApiContext.Provider>
);

describe('useSearch using a component to show hook state', () => {
    it('sets loading state property to true on mount', () => {
        let wrapper;
        act(() => {
            wrapper = mount(<Wrapper />);
        });
        expect(wrapper.find('h1').text()).toEqual('loading');
    });

    it('sets data state property when finished fetching', done => {
        let wrapper;
        act(() => {
            wrapper = mount(<Wrapper />);
        });
        process.nextTick(() => {
            act(() => {
                wrapper.update();
            });
            expect(wrapper.find('h1').text()).toEqual('data');
            done();
        });
    });
});

describe('useSearch using global.fetch jest mock', () => {
    it('calls fetch only one time', () => {
        act(() => {
            mount(<Wrapper />);
        });
        expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    it('calls fetch with the correct url', () => {
        act(() => {
            mount(<Wrapper />);
        });
        // %2C is the encoding for the comma (,) character
        // the album=true&artist=true needs to be fixed but causes no errors for now
        expect(global.fetch).toHaveBeenCalledWith(
            'https://api.spotify.com/v1/search?q=jack&type=album%2Cartist%2Cplaylist%2Ctrack&album=true&artist=true&playlist=true&track=true',
            expect.anything()
        );
    });

    it('calls fetch with the correct settings (headers etc..) and correct authorization token ("123" in this test)', () => {
        act(() => {
            mount(<Wrapper />);
        });
        expect(global.fetch).toHaveBeenCalledWith(expect.anything(), {
            method: 'GET',
            headers: {
                Authorization: 'Bearer 123'
            }
        });
    });
});
