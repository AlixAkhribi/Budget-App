import React from 'react';
import { connect } from "react-redux";

import ExpenseListItem from './ExpenseListItem'

const ExpensesList = (props) => (
    <div>
        <h1>Expenses List</h1>
        {props.expenses.map((expense) => {
            console.log(expense.id);
            
            return <ExpenseListItem key={expense.id} {...expense} />
        })}
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}


export default connect(mapStateToProps)(ExpensesList)