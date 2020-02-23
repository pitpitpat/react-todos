import React from 'react';

import GlobalContext from '../context/globalContext';
import styles from './TodoDetails.module.css';

export default class TodoDetails extends React.Component {
    static contextType = GlobalContext;

    state = {
        selectedTodo: this.context.todos.find(todo => todo.id === this.props.todoId)
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.context.todos);
        if (this.props.todoId !== prevProps.todoId || !prevProps.todoId) {
            this.setState({
                selectedTodo: this.context.todos.find(todo => todo.id === this.props.todoId)
            });
        }
    }

    inputChangeHandler = (event) => {
        const updatedSelectedTodo = {
            ...this.state.selectedTodo
        };
        updatedSelectedTodo['name'] = event.target.value;
        this.setState({
            selectedTodo: updatedSelectedTodo
        });
    };

    render() {
        return (
            <div>
                <div>
                    <label className={styles.detailLabel} htmlFor="todoName">Name:</label>
                    <input id="todoName" className={styles.detailInput} type="text" onChange={this.inputChangeHandler} value={this.state.selectedTodo.name}/>
                </div>
                <div>
                    <label className={styles.detailLabel} htmlFor="todoDescription">Description:</label>
                    <input id="todoDescription" className={styles.detailInput} type="text" onChange={this.inputChangeHandler} value={this.state.selectedTodo.description}/>
                </div>
            </div>
        );
    }
}
