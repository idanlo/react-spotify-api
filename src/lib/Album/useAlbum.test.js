import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import useAlbum from './useAlbum';
import SpotifyApiContext from '../context';

const CompSingle = () => {
    const { data, loading, error } = useAlbum('3cfAM8b8KqJRoIzt3zLKqw');

    if (data) return <h1>data</h1>;
    if (loading) return <h1>loading</h1>;
    if (error) return <h1>error</h1>;
    else return <h1>none</h1>;
};

const CompMultiple = () => {
    const { data, loading, error } = useAlbum([
        '3cfAM8b8KqJRoIzt3zLKqw',
        '4vxL3cLukzWtF16JD2eb2W'
    ]);

    if (data) return <h1>data</h1>;
    if (loading) return <h1>loading</h1>;
    if (error) return <h1>error</h1>;
    else return <h1>none</h1>;
};

const WrapperSingle = () => (
    <SpotifyApiContext.Provider value="123">
        <CompSingle />
    </SpotifyApiContext.Provider>
);

const WrapperMultiple = () => (
    <SpotifyApiContext.Provider value="123">
        <CompMultiple />
    </SpotifyApiContext.Provider>
);

describe('useAlbum (single album) using a component to show hook state', () => {
    it('sets loading state property to true on mount', () => {
        let wrapper;
        act(() => {
            wrapper = mount(<WrapperSingle />);
        });
        expect(wrapper.find('h1').text()).toEqual('loading');
    });

    it('sets data state property when finished fetching', done => {
        let wrapper;
        act(() => {
            wrapper = mount(<WrapperSingle />);
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

describe('useAlbum (single album) using global.fetch jest mock', () => {
    it('calls fetch only one time', () => {
        act(() => {
            mount(<WrapperSingle />);
        });
        expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    it('calls fetch with the correct url', () => {
        act(() => {
            mount(<WrapperSingle />);
        });
        expect(global.fetch).toHaveBeenCalledWith(
            'https://api.spotify.com/v1/albums/3cfAM8b8KqJRoIzt3zLKqw',
            expect.anything()
        );
    });

    it('calls fetch with the correct settings (headers etc..) and correct authorization token ("123" in this test)', () => {
        act(() => {
            mount(<WrapperSingle />);
        });
        expect(global.fetch).toHaveBeenCalledWith(expect.anything(), {
            method: 'GET',
            headers: {
                Authorization: 'Bearer 123'
            }
        });
    });
});

describe('useAlbum (multiple albums) using a component to show hook state', () => {
    it('sets loading state property to true on mount', () => {
        let wrapper;
        act(() => {
            wrapper = mount(<WrapperMultiple />);
        });
        expect(wrapper.find('h1').text()).toEqual('loading');
    });

    it('sets data state property when finished fetching', done => {
        let wrapper;
        act(() => {
            wrapper = mount(<WrapperMultiple />);
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

describe('useAlbum (multiple albums) using global.fetch jest mock', () => {
    it('calls fetch only one time', () => {
        act(() => {
            mount(<WrapperMultiple />);
        });
        expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    it('calls fetch with the correct url', () => {
        act(() => {
            mount(<WrapperMultiple />);
        });
        // %2C is the encoding for the comma (,) character
        expect(global.fetch).toHaveBeenCalledWith(
            'https://api.spotify.com/v1/albums?ids=3cfAM8b8KqJRoIzt3zLKqw%2C4vxL3cLukzWtF16JD2eb2W',
            expect.anything()
        );
    });

    it('calls fetch with the correct settings (headers etc..) and correct authorization token ("123" in this test)', () => {
        act(() => {
            mount(<WrapperMultiple />);
        });
        expect(global.fetch).toHaveBeenCalledWith(expect.anything(), {
            method: 'GET',
            headers: {
                Authorization: 'Bearer 123'
            }
        });
    });
});
