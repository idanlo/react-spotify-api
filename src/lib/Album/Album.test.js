import React from 'react';
import { shallow } from 'enzyme';
import Album from './Album';

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
