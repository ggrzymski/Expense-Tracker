import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('ExpenseForm correct render', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm correctly with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
  });

test('Invalid form submission test', () =>{
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
  });

  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const value = 'New Description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });

    expect(wrapper.state('description')).toBe(value);
});

test('should call onSubmit property for valid suhmissoons', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
  wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
  });

  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
      description: expenses[0].description,
      amount: expenses[0].amount,
      note: expenses[0].note,
      createdAt: expenses[0].createdAt
  });
});