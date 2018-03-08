import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByAmount, sortByDate} from '../actions/filters';

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

        <select value={props.filters.sortBy}
          onChange={ (e) => {
              if(e.target.value =='date') {
                  props.dispatch(sortByDate());
                } else if(e.target.value === 'amount') {
                    props.dispatch(sortByAmount());
              }
          }}>
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