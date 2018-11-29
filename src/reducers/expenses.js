// Expenses Reducer

const expensesReducerDefaultState = [];

const expenseReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'UPDATE_EXPENSE':
            return state.map(expense => {
                if (expense.id === action.id) {
                    return ({
                        ...expense,
                        ...action.expense
                    })
                } else {
                    return state
                }
            })
        default:
            return state
    }
}


export default expenseReducer