import {createStore, combineReducers} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

/**
 * combineReducers turns an object whose values are different
 * reducing functions into a single reducing function. The result
 * calls every child reducer, and gathers their results into single object.
 */
export default () => {
    const store = createStore(combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    }),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

    return store;
};