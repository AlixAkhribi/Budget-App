import moment from 'moment';
import filterReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filterReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toEqual('amount')
}

)
test('should set sortBy to date', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toEqual('date')
})