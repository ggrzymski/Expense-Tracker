import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

const addExpense = ({description = '', note = '',amount = 0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({id = 0} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter = (text = '') => ({
    type: 'TEXT_FILTER',
    text
});

const sortByDate = () => ({
    type: 'SORT_DATE'
});

const sortByAmount = () => ({
    type: 'SORT_AMOUNT'
});

const setStartDate = (startDate) => ({
    type: 'START_DATE',
    startDate
});

const setEndDate = (endDate) => ({
    type: 'END_DATE',
    endDate
});

const getVisibleExpenses = (expenses,{text,sortBy,startDate,endDate}) => {
    return expenses.filter((expense) =>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch=expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if (sortBy==='date') {
            return a.createdAt < b.createdAt ? 1: -1;
        } else if (sortBy==='amount') {
            return a.amount < b.amount ? 1: -1;
        }
    });
};

const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', // date or amount
    startDate: undefined,
    endDate: undefined
};

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
          return state.concat(action.expense);
        case 'REMOVE_EXPENSE':
          return state.filter(({id}) => id !== action.id);
        case 'EDIT_EXPENSE':
          return state.map((expense) => {
            if(expense.id === action.id) {
                return {
                    ...expense,
                    ...action.updates
                };
            } else {
                return expense;
            }
          });
        default:
          return state;
    }
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case "TEXT_FILTER":
          return {
              ...state,
              text: action.text
          };
          case "SORT_AMOUNT":
            return {
                ...state,
                sortBy: 'amount'
            };
            case "SORT_DATE":
            return {
                ...state,
                sortBy: 'date'
            };
            case "START_DATE":
            return {
                ...state,
                startDate: action.startDate
            };
            case "END_DATE":
            return {
                ...state,
                endDate: action.endDate
            };
        default:
          return state;
    }
};

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}));

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount:300, createdAt: -250}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount:100, createdAt: 100}));
// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

//store.dispatch(setTextFilter('rent'));
store.dispatch(sortByAmount()); 
// store.dispatch(sortByDate());

//store.dispatch(setStartDate(100));
// store.dispatch(setEndDate(1250));


const demoState = {
    expenses: [{
        id: 'podfddfds',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};