import moment from 'moment';

// Get Visible Expenses

export default (expenses, { text, sortBy, endDate, startDate }) => {
    return expenses.filter((expense) => {

        const momentCreatedAt = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(momentCreatedAt, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(momentCreatedAt, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        switch (sortBy) {
            case 'date':
                return a.createdAt < b.createdAt ? 1 : -1;
            case 'amount':
                return a.amount < b.amount ? 1 : -1;
        }
    })
}

