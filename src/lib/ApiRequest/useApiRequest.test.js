import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import useApiRequest from './useApiRequest';

const Comp = () => {
    const { data, loading, error } = useApiRequest('https://google.com');

    if (data) return <h1>data</h1>;
    if (loading) return <h1>loading</h1>;
    if (error) return <h1>error</h1>;
    else return <h1>none</h1>;
};

describe('useApiRequest', () => {
    it('sets loading state property to true', () => {
        global.fetch = function fetch() {
            return {
                then(fn) {
                    return fn({
                        json() {
                            return new Promise((reject, resolve) =>
                                setTimeout(() => resolve({ test: 1 }), 1000)
                            );
                        }
                    });
                },
                catch(fn) {}
            };
        };
        let wrapper;
        act(() => {
            wrapper = mount(<Comp />);
        });
        expect(wrapper.find('h1').text()).toEqual('loading');
    });

    it('sets data property when finished fetching', () => {
        global.fetch = function fetch() {
            return {
                then(fn) {
                    return fn({
                        json() {
                            return {
                                then(fn) {
                                    fn({ test: 1 });
                                    return {
                                        catch(fn) {}
                                    };
                                },
                                catch(fn) {}
                            };
                        }
                    });
                },
                catch(fn) {}
            };
        };
        let wrapper;
        act(() => {
            wrapper = mount(<Comp />);
        });
        expect(wrapper.find('h1').text()).toEqual('data');
    });
});
