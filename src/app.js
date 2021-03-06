import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import AppRouter from './router/AppRouter'
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore()


store.dispatch(addExpense({
    description: 'Water Bill',
    amount: 20000,
    createdAt: 100
}));
store.dispatch(addExpense({
    description: 'Gas Bill',
    amount: 600000,
    createdAt: 1000
}));

store.dispatch(setTextFilter('water'))


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

console.log(visibleExpenses);


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);



ReactDOM.render(jsx, document.getElementById("app-root"))