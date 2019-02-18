import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Album from './Album';

configure({ adapter: new Adapter() });

describe('<Album />', () => {
    it('should render', () => {
        const wrapper = shallow(<Album id="123">{() => null}</Album>);
        expect(wrapper).toBeTruthy();
    });

    it('should return a function inside <ApiRequest />', () => {
        const wrapper = shallow(<Album id="123">{() => null}</Album>);
        expect(typeof wrapper.find('ApiRequest').props().children).toEqual(
            'function'
        );
    });
});
