import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {addExpense} from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import {setTextFilter} from './actions/filters';

/*
 * Store holds whole state tree of application.
 * actions can be dispatche, which can change the state.
 *  subscribe is a change listener that will be called any time an
 * action is dispatched. 
 */
const store = configureStore();

store.dispatch(addExpense({description:'Water Bill', amount: 4500 }));
store.dispatch(addExpense({description:'Rent Bill', amount: 109500 }));
store.dispatch(addExpense({description:'Gas Bill', createdAt: 1000}));
store.dispatch(setTextFilter('bill'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//console.log(visibleExpenses);
console.log(store.getState());

//Provider makes store available to the connect() calls in the component hierachy.
const jsx = (
    <Provider store ={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
