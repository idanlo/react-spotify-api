import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Album from './Album';

configure({ adapter: new Adapter() });

describe('<Album />', () => {
  it('should render', () => {
    const wrapper = shallow(<Album id="123" />);
    expect(wrapper).toBeTruthy();
  });

  it('should return a function inside <ApiRequestWrapper />', () => {
    const wrapper = shallow(<Album id="123" />);
    expect(typeof wrapper.find('ApiRequestWrapper').props().children).toEqual(
      'function'
    );
  });
});
