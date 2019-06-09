import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import ApiRequest from './ApiRequest';

describe('ApiRequest', () => {
  it('calls props.children initially with parameters (null, false, false)', () => {
    const fn = jest.fn(() => null);
    act(() => {
      mount(<ApiRequest url="https://google.com" children={fn} />);
    });

    expect(fn).toHaveBeenNthCalledWith(1, null, false, null);
  });

  it('calls props.children on the second time with parameters (null, true, false)', () => {
    const fn = jest.fn(() => null);
    act(() => {
      mount(<ApiRequest url="https://google.com" children={fn} />);
    });

    expect(fn).toHaveBeenNthCalledWith(2, null, true, null);
  });

  it('calls props.children on the third (after receiving data) time with parameters ({test: 1}, false, false)', done => {
    let wrapper;
    const fn = jest.fn(() => null);
    act(() => {
      wrapper = mount(<ApiRequest url="https://google.com" children={fn} />);
    });
    process.nextTick(() => {
      act(() => {
        wrapper.update();
      });

      expect(fn).toHaveBeenLastCalledWith(
        { url: 'https://google.com' },
        false,
        null
      );
      done();
    });
  });

  it('calls props.children with the error parameter set to true when receiving Promise.reject with parameters (null, false, true)', done => {
    let wrapper;
    const fn = jest.fn(() => null);
    act(() => {
      wrapper = mount(<ApiRequest url="" children={fn} />);
    });
    process.nextTick(() => {
      act(() => {
        wrapper.update();
      });
      expect(fn).toHaveBeenLastCalledWith(null, false, {
        message: 'wrong url'
      });
      done();
    });
  });
});
