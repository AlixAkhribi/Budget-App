import React from 'react';
import ExpensesList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashBoardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpensesList />
    </div>
);

export default ExpenseDashBoardPage