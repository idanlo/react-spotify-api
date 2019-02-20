import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import ApiRequest from './ApiRequest';

describe('ApiRequest', () => {
    beforeEach(() => {
        const mockDataPromise = Promise.resolve({
            test: 1
        });
        const mockFetchPromise = url => {
            // throw an error if the url isn't https://google.com for testing purposes
            if (url !== 'https://google.com') {
                return Promise.reject({ reason: 'wrong url' });
            }
            return Promise.resolve({
                json: () => mockDataPromise
            });
        };
        jest.spyOn(global, 'fetch').mockImplementation(url =>
            mockFetchPromise(url)
        );
    });

    afterEach(() => {
        global.fetch.mockClear();
    });
    it('calls props.children initially with parameters (null, false, false)', () => {
        const fn = jest.fn(() => null);
        act(() => {
            mount(<ApiRequest url="https://google.com" children={fn} />);
        });

        expect(fn).toHaveBeenNthCalledWith(1, null, false, false);
    });

    it('calls props.children on the second time with parameters (null, true, false)', () => {
        const fn = jest.fn(() => null);
        act(() => {
            mount(<ApiRequest url="https://google.com" children={fn} />);
        });

        expect(fn).toHaveBeenNthCalledWith(2, null, true, false);
    });

    it('calls props.children on the third (after receiving data) time with parameters ({test: 1}, false, false)', done => {
        let wrapper;
        const fn = jest.fn(() => null);
        act(() => {
            wrapper = mount(
                <ApiRequest url="https://google.com" children={fn} />
            );
        });
        process.nextTick(() => {
            act(() => {
                wrapper.update();
            });

            expect(fn).toHaveBeenLastCalledWith({ test: 1 }, false, false);
            done();
        });
    });

    it('calls props.children with the error parameter set to true when receiving Promise.reject with parameters (null, false, true)', done => {
        let wrapper;
        const fn = jest.fn(() => null);
        act(() => {
            wrapper = mount(
                <ApiRequest url="https://googel.com" children={fn} />
            );
        });
        process.nextTick(() => {
            act(() => {
                wrapper.update();
            });

            expect(fn).toHaveBeenLastCalledWith(null, false, true);
            done();
        });
    });
});
