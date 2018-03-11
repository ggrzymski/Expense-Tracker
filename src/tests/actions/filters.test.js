import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../../actions/filters';
import moment from 'moment';

test('Set Start Date Action Object', () => {
  const action = setStartDate(moment(0));  
  expect(action).toEqual({
    type: 'START_DATE',
    startDate: moment(0)
  });
});

test('Set End Date Action Object', () => {
    const action = setEndDate(moment(0));  
    expect(action).toEqual({
      type: 'END_DATE',
      endDate: moment(0)
    });
});

test('Set Text Filter Action Object Provided Value', () =>{
    const action = setTextFilter('bill');
    expect(action).toEqual({
        type: 'TEXT_FILTER',
        text: 'bill'
    });
});

test('Set Text Filter Action Object Default Value', () =>{
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'TEXT_FILTER',
        text: ''
    });
});

test('Sort By Amount Action Object', () =>{
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_AMOUNT'
    });
});

test('Sort By Date Action Object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_DATE'
    });
});