const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', // date or amount
    startDate: undefined,
    endDate: undefined
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

export default filtersReducer;