import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ApiRequestWrapper from './ApiRequestWrapper';

configure({ adapter: new Adapter() });

describe('<ApiRequestWrapper />', () => {
    it('should render', () => {
        const children = jest.fn();
        const wrapper = shallow(
            <ApiRequestWrapper
                url="https://test.com/ApiRequest"
                children={children}
            />
        );
        expect(wrapper).toBeTruthy();
    });

    it('should have the context consumer that provides data to ApiRequest component', () => {
        const children = jest.fn();
        const wrapper = shallow(
            <ApiRequestWrapper
                url="https://test.com/ApiRequest"
                children={children}
            />
        );
        expect(wrapper.find('ContextConsumer')).toBeTruthy();
    });
});
