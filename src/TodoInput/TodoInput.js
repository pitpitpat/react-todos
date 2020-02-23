import React from 'react';

import styles from './TodoInput.module.css';

export default class TodoInput extends React.Component {

    state = {
        newTodoName: ''
    };

    inputChangeHandler = (event) => {
        this.setState({newTodoName: event.target.value});
    };

    addTodo = () => {
        this.props.onAddClick(this.state.newTodoName, 'No description');
        this.setState({newTodoName: ''});
    };

    render() {
        return (
            <div className={styles.todoInputContainer}>
                <input className={styles.todoInput} type="text" onChange={this.inputChangeHandler} value={this.state.newTodoName}/>
                <button className={styles.addButton} onClick={this.addTodo}>
                    <i className="fas fa-plus"/>
                </button>
            </div>
        );
    }
}
