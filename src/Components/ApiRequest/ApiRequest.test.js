import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ApiRequest from './ApiRequest';

configure({ adapter: new Adapter() });

describe('<ApiRequest />', () => {
  it('should have data given from the axios mock inside state.data', () => {
    const children = jest.fn();
    const wrapper = shallow(
      <ApiRequest url="https://test.com/ApiRequest" children={children} />
    );

    return Promise.resolve().then(() => {
      const state = wrapper.state();
      expect(state.data).toHaveProperty('url', 'https://test.com/ApiRequest');
    });
  });

  it('should have the data in state after componentDidMount', () => {
    const children = jest.fn();

    const wrapper = shallow(
      <ApiRequest url="https://test.com/ApiRequest" children={children} />
    );

    return Promise.resolve().then(() => {
      const state = wrapper.state();
      expect(children).toHaveBeenCalledWith(state.data, false, false);
    });
  });
});
