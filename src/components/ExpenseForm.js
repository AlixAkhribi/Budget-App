import React from 'react';

export default class ExepenseForm extends React.Component {
    state = {
        description: '',
        note: ''
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }))
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        type='text'
                        placeholder='description'
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type='number'
                        placeholder='Amount'
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