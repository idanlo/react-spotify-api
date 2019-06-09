import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import SpotifyApiContext from '../context';
import useApiRequest from './useApiRequest';

const Comp = ({ url }) => {
  const { data, loading, error } = useApiRequest(url);

  if (data) return <h1>data</h1>;
  if (loading) return <h1>loading</h1>;
  if (error) return <h1>error</h1>;
  else return <h1>none</h1>;
};

const Wrapper = ({ url }) => (
  <SpotifyApiContext.Provider value="123">
    <Comp url={url} />
  </SpotifyApiContext.Provider>
);

describe('useApiRequest using a component to show hook state', () => {
  it('sets loading state property to true on mount', () => {
    let wrapper;
    act(() => {
      wrapper = mount(<Wrapper url="https://google.com" />);
    });
    expect(wrapper.find('h1').text()).toEqual('loading');
  });

  it('sets data state property when finished fetching', done => {
    let wrapper;
    act(() => {
      wrapper = mount(<Wrapper url="https://google.com" />);
    });
    process.nextTick(() => {
      act(() => {
        wrapper.update();
      });
      expect(wrapper.find('h1').text()).toEqual('data');
      done();
    });
  });

  it('sets error state property when an error occurs', done => {
    let wrapper;
    act(() => {
      // this url with throw an error as configured in setupTests.js fetch mock
      wrapper = mount(<Wrapper url="" />);
    });
    process.nextTick(() => {
      act(() => {
        wrapper.update();
      });
      expect(wrapper.find('h1').text()).toEqual('error');
      done();
    });
  });

  it('sets error state property when api error data is received', done => {
    let wrapper;
    act(() => {
      // this url will result in json error response as configured in setupTests.js fetch mock
      wrapper = mount(<Wrapper url="api.error" />);
    });
    process.nextTick(() => {
      act(() => {
        wrapper.update();
      });
      expect(wrapper.find('h1').text()).toEqual('error');
      done();
    });
  });

  it('sets error state property when a not ok response is received', done => {
    let wrapper;
    act(() => {
      // this url will result in a not ok response as configured in setupTests.js fetch mock
      wrapper = mount(<Wrapper url="api.not.ok" />);
    });
    process.nextTick(() => {
      act(() => {
        wrapper.update();
      });
      expect(wrapper.find('h1').text()).toEqual('error');
      done();
    });
  });
});

describe('useApiRequest using global.fetch jest mock', () => {
  it('calls fetch only one time', () => {
    act(() => {
      mount(<Wrapper url="https://google.com" />);
    });
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  it('calls fetch with the correct url', () => {
    act(() => {
      mount(<Wrapper url="https://google.com" />);
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
