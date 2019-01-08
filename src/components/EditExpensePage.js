import React from 'React';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { updateExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(updateExpense(expense.id, expense));
                    props.history.push('/')
                }} />
        </div>
    )
};


const mapStatetoProps = (state, props) => {
    return {
        expense: state.expenses.find(expense => expense.id === props.match.params.id)
    }
}

export default connect(mapStatetoProps)(EditExpensePage)