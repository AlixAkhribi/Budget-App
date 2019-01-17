import moment from 'moment'
import selectExpenses from '../../selectors/expenses'
import expenses from '../fixtures/expenses'


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