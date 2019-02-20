import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount, shallow } from 'enzyme';
import ApiRequest from './ApiRequest';

describe('ApiRequest', () => {
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
});
