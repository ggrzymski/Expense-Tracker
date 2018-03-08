const expensesReducerDefaultState = [];

/**
 * Specifies how the application's state changes in response to actions sent 
 * to the store. This reducer handles adding,removing,editing expenses.
 * @param {*} state 
 * @param {*} action 
 */
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

export default expensesReducer;