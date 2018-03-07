import {createStore} from 'redux';

//Action generators return action objects

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const countReducer= (state = {count: 0}, action) => {
    switch(action.type) {
        case 'DECREMENT': 
        const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
          return {
            count: state.count-decrementBy
        };
        case 'RESET': 
          return {
            count: 0
        };
        default: {
            return state;
        }
    }
};

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(decrementCount({decrementBy: 10}));