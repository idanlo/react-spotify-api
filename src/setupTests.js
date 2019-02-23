import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

global.beforeEach(() => {
    const mockFetchPromise = url => {
        // throw an error if the url is empty
        if (url === '') {
            return Promise.reject({ reason: 'wrong url' });
        }
        return Promise.resolve({
            json: () =>
                Promise.resolve({
                    url
                })
        });
    };
    jest.spyOn(global, 'fetch').mockImplementation(url =>
        mockFetchPromise(url)
    );
});

global.afterEach(() => {
    global.fetch.mockClear();
});
