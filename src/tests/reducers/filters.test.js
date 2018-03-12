import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('Default filter values', () => {
  const state = filtersReducer(undefined, {type: '@@INIT'});

  expect(state).toEqual({
      text: '',
      sortBy: 'date',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
  });
});

test('Sort By Amount Reducer', () => {
    const state = filtersReducer(undefined, {type: 'SORT_AMOUNT'});
  
    expect(state.sortBy).toBe('amount');
});

test('Sort By Date Reducer', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    
    const action = {type: 'SORT_DATE'};
    const state = filtersReducer(currentState,action);

    expect(state.sortBy).toBe('date');
});

test('Set Text Filter Reducer', () =>{
    const action = {type: 'TEXT_FILTER', text: 'fart'};
    const state = filtersReducer(undefined, action);

    expect(state.text).toBe(action.text);
});

test('Set Start Date Reducer', () =>{
    const action = {type: 'START_DATE', startDate: moment(0)};
    const state = filtersReducer(undefined, action);

    expect(state.startDate).toBe(action.startDate);
});

test('Set End Date Reducer', () =>{
    const action = {type: 'END_DATE', endDate: moment(0)};
    const state = filtersReducer(undefined, action);

    expect(state.endDate).toBe(action.endDate);
});

