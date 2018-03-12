import expensesReducer from '../../reducers/expenses';
import moment from 'moment';

test('Default Sate Expense Reducer', () =>{
    const state = expensesReducer(undefined, {type:'@@INIT'});

    expect(state).toEqual([]);
});

const expenses = [{
    id:'1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id:'2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id:'3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4,'days').valueOf()
}];

test('Remove Expense By Id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test('Don\'t Remove Expense By Id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Add an Expense Reducer', () => {
    const expense = {
        id: '109',
        description: 'Laptop',
        note: '',
        createdAt: 20000,
        amount: 29500
    };

    const action = {
        type: 'ADD_EXPENSE',
        expense
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('Edit an Expense Reducer', () => {
    const amount = 12000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    };

    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test('Edit an Expense Not Found Reducer', () => {
    const amount = 12000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: -1,
        updates: {
            amount
        }
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

