import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('Remove Expense Action Object', () => {
  const action = removeExpense({id: '123abc'});
  expect(action).toEqual({
      type: 'REMOVE_EXPENSE',
      id: '123abc'
  })
});

test('Edit Expense Action Object', () => {
    const action = editExpense('123abc', {note:'New note value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: "New note value"
        }
    })
  });

  test('Add Expense Action Object Provided Values', () => {

    const expenseData = {
      description: 'Rent',
      amount: 109500,
      createdAt: 1000,
      note: 'This was last month\'s rent'
    };

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
  });

  test('Add Expense Action Object Default Values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            createdAt: 0,
            note: ''
        }
    });
  });
