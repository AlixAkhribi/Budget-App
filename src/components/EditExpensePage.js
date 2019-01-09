import React from 'React';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { updateExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(updateExpense(expense.id, expense));
                    props.history.push('/')
                }} />
            <button onClick={() => {
                props.dispatch(removeExpense({ id: props.expense.id }))
                props.history.push('/')
            }}>Remove</button>
        </div>
    )
};


const mapStatetoProps = (state, props) => {
    return {
        expense: state.expenses.find(expense => expense.id === props.match.params.id)
    }
}

export default connect(mapStatetoProps)(EditExpensePage)