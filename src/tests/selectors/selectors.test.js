import getVisibleExpenses from '../../selectors/expenses';
import moment from 'moment';

const expenses = [{
    id:'1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id:'2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id:'3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4,'days').valueOf()
}];

test('Filter by Text Value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
}   ;

    const selector = getVisibleExpenses(expenses, filters);
    expect(selector).toEqual([ expenses[2], expenses[1] ]);

});

test('Filter by Start Date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };

    const selector = getVisibleExpenses(expenses, filters);
    expect(selector).toEqual([expenses[2], expenses[0]]);
});

test('Filter by End Date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2,'days')
    }

    const selector = getVisibleExpenses(expenses, filters);
    expect(selector).toEqual([expenses[0], expenses[1]]);
});

test('Filter by Date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const selector = getVisibleExpenses(expenses, filters);
    expect(selector).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('Filter by Amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    const selector = getVisibleExpenses(expenses, filters);
    expect(selector).toEqual([expenses[1], expenses[2], expenses[0]]);
});