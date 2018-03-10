import moment from 'moment';

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', // date or amount
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

/**
 * Modifies the filter's settings based on the incoming input. Changes
 * the sort setting, text filter, and start/end dates. Previous state and action as inputs.
 * @param {*} state 
 * @param {*} action 
 */
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

export default filtersReducer;