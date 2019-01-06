import React from 'react';
import moment from 'moment';

import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment().format('MMM Do YYYY')
console.log(now);


export default class ExepenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calendarFocused: false,
        error: ''
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }))
    };

    onAmountChange = (e) => {
        const amount = e.target.value;

        if (amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    };

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }))
        }
    };

    onCalendarFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    };

    onFormSubmit = (e) => {
        e.preventDefault()

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({
                error: 'Please provide description for description and amount'
            }))
        } else {
            this.setState(() => ({
                error: ''
            }))
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input
                        type='text'
                        placeholder='description'
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type='text'
                        placeholder='Amount'
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onCalendarFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder='Add a note for your expense (optional)'
                        onChange={this.onNoteChange}
                    />
                    <button> Add Expense </button>
                </form>
            </div>
        )
    }
}