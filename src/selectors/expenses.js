import moment from 'moment';
/**
 * Passes in expenses and filters and returns back modified
 * array based on the filters applied. Also, the resulting array
 * is sorted either by amount or date.
 * 
 * @param {*} expenses 
 * @param {*} filters 
 */
const getVisibleExpenses = (expenses,{text,sortBy,startDate,endDate}) => {
    return expenses.filter((expense) =>{
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ?  startDate.isSameOrBefore(createdAtMoment, 'day'): true;
        const endDateMatch = endDate ?  endDate.isSameOrAfter(createdAtMoment, 'day'): true;
        const textMatch=expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if (sortBy==='date') {
            return a.createdAt < b.createdAt ? 1: -1;
        } else if (sortBy==='amount') {
            return a.amount < b.amount ? 1: -1;
        }
    });
};

export default getVisibleExpenses;