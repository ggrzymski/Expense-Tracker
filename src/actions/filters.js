export const setTextFilter = (text = '') => ({
    type: 'TEXT_FILTER',
    text
});

export const sortByDate = () => ({
    type: 'SORT_DATE'
});

export const sortByAmount = () => ({
    type: 'SORT_AMOUNT'
});

export const setStartDate = (startDate) => ({
    type: 'START_DATE',
    startDate
});

export const setEndDate = (endDate) => ({
    type: 'END_DATE',
    endDate
});