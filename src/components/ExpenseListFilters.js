import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter} from '../actions/filters';

/**
 * Provides an input text field and select option menu.
 * Calls setTextFilter action on the provided input.
 * @param {*} props 
 */
const ExpenseListFilters = (props) => (
    <div>
        <input type="text" onChange={ (e) => {
            props.dispatch( (setTextFilter(e.target.value)));
        }} />

        <select>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
);

/**
 * Connected to state's filters from redux
 * @param {*} state 
 */
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);