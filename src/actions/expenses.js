import uuid from 'uuid'

//ADD_EXPENSE

export const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

// REMOVE_EXPENSE

export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// UPDATE EXPENSE

export const updateExpense = ({ id }, expense) => ({
    type: 'UPDATE_EXPENSE',
    id,
    expense,
})