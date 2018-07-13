import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

let startLogin, wrapper;

beforeAll(() => {
    startLogin = jest.fn();
    wrapper = shallow(<LoginPage startLogin={startLogin} />);
});

test('add snapshot of LoginPage component', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});