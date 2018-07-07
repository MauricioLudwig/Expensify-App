import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<ExpensesSummary expenses={expenses} />);
});

test('should generate snapshot of ExpensesSummary component', () => {
    expect(wrapper).toMatchSnapshot();
});