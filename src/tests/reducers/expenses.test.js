import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state for expense reducer', () => {
    const state = expenseReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([])
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
});

test('should not remove any expense', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses)
});

test('should add expense', () => {
    const expense = {
        id: 'test-id',
        description: 'test description',
        note: '',
        amount: 0,
        createdAt: 0
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([...expenses, expense])
});

test('should edit expense by id', () => {
    const amount = 210000;
    const action = {
        type: 'UPDATE_EXPENSE',
        id: expenses[1].id,
        expense: {
            amount
        }
    }
    const state = expenseReducer(expenses, action);
    expect(state[1].amount).toBe(amount)
});

test('should not edit expense if id not found', () => {
    const amount = 210000;
    const action = {
        type: 'UPDATE_EXPENSE',
        id: '-1',
        expense: {
            amount
        }
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses)
})