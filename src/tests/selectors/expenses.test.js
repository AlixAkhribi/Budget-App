import moment from 'moment'
import selectExpenses from '../../selectors/expenses'


// Expenses Dummy data

const expenses = [{
    id: 1,
    description: 'Gum',
    note: '',
    amount: 140,
    createdAt: 0
}, {
    id: 2,
    description: 'Rent',
    note: '',
    amount: 190500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: 3,
    description: 'Credit Card',
    note: '',
    amount: 25000,
    createdAt: moment(0).add(5, 'days').valueOf()
}];

test('Should filter by text Value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined,
    };
    const results = selectExpenses(expenses, filters);
    // The credit card expense sould return first due to sortBy:date being the default 
    expect(results).toEqual([expenses[2], expenses[1]])
})

test('Should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined,
    };
    const results = selectExpenses(expenses, filters);
    expect(results).toEqual([expenses[2], expenses[0]])
})

test('Should filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    };
    const results = selectExpenses(expenses, filters);
    expect(results).toEqual([expenses[0], expenses[1]])
})

test('Should filter by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const results = selectExpenses(expenses, filters);
    expect(results).toEqual([expenses[2], expenses[0], expenses[1]])
})

test('Should filter by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const results = selectExpenses(expenses, filters);
    expect(results).toEqual([expenses[1], expenses[2], expenses[0]])
})