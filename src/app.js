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
import 'react-dates/lib/css/_datepicker.css';

/*
 * Store holds whole state tree of application.
 * actions can be dispatche, which can change the state.
 *  subscribe is a change listener that will be called any time an
 * action is dispatched. 
 */
const store = configureStore();

//Provider makes store available to the connect() calls in the component hierachy.
const jsx = (
    <Provider store ={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
