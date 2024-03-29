import React from 'react'
import { connect } from 'react-redux'
import List from './List'
import {
    handleAddGoal,
    handleDeleteGoal
} from '../actions/goals'

class Goals extends React.Component {
    addGoal = (e) => {
        e.preventDefault();

        this.props.dispatch(handleAddGoal(
            this.input.value,
            () => this.input.value = ''
        ))
    }

    removeItem = (goal) => {
        this.props.dispatch(handleDeleteGoal(goal));
    }

    render() {
        return (
            <div>
                <h1>Add Goal</h1>
                <input 
                    type='text'
                    placeholder='Add Goal'
                    ref={(input) => this.input = input}
                />
                <button onClick={this.addGoal}>Add Goal</button>
                <List remove={this.removeItem} items={this.props.goals} />
            </div>
        );
    }
}

export default connect((state) => ({
    goals: state.goals
}))(Goals)