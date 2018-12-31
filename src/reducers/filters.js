// Filter Reducers 

const filterReducersDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
}

const filterReducer = (state = filterReducersDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            if (state.text !== action.text) {
                return {
                    ...state,
                    text: action.text
                }
            } else {
                return state
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }
}

export default filterReducer