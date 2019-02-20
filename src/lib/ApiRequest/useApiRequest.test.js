import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount, shallow } from 'enzyme';
import useApiRequest from './useApiRequest';
import SpotifyApiContext from '../context';

const Comp = () => {
    const { data, loading, error } = useApiRequest('https://google.com');

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

describe('useApiRequest', () => {
    beforeEach(() => {
        const mockDataPromise = Promise.resolve({
            test: 1
        });
        const mockFetchPromise = Promise.resolve({
            json: () => mockDataPromise
        });
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
    });

    afterEach(() => {
        global.fetch.mockClear();
    });
    it('sets loading state property to true on mount', () => {
        let wrapper;
        act(() => {
            wrapper = mount(<Wrapper />);
        });
        expect(wrapper.find('h1').text()).toEqual('loading');
    });

    it('sets data property when finished fetching', done => {
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
        expect(global.fetch).toHaveBeenCalledWith(
            'https://google.com',
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
