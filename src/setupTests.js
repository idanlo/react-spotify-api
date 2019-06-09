import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

global.beforeEach(() => {
  const mockFetchPromise = url => {
    // throw an error if the url is empty
    if (url === '') {
      return Promise.reject({ message: 'wrong url' });
    } else if (url === 'api.error') {
      return Promise.resolve({
        ok: false,
        json: () =>
          Promise.resolve({
            error: {
              status: 401,
              message: 'Invalid access token'
            }
          })
      });
    } else if (url === 'api.not.ok') {
      return Promise.resolve({
        ok: false
      });
    }
    return Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve({
          url
        })
    });
  };
  jest.spyOn(global, 'fetch').mockImplementation(url => mockFetchPromise(url));
});

global.afterEach(() => {
  global.fetch.mockClear();
});
