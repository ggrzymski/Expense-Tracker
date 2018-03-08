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
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
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