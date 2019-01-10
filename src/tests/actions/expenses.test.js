import { addExpense, removeExpense, updateExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: 'test1234' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'test1234'
    })
});


test('should setup update expense action object', () => {
    const action = updateExpense({ id: 'test1234' }, { note: 'test note' });
    expect(action).toEqual({
        type: 'UPDATE_EXPENSE',
        id: 'test1234',
        expense: {
            note: 'test note'
        }
    })
});

test('should setup add expense action object', () => {
    const addExpenseObject = {
        description: 'test description',
        note: 'test note',
        amount: 1900,
        createdAt: 10000
    };
    const action = addExpense(addExpenseObject);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...addExpenseObject,
            id: expect.any(String)
        }
    })
});

test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})