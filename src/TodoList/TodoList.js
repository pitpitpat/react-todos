import React from 'react';

import styles from './TodoList.module.css';

export default function TodoList(props) {
    const todos = props.todos.map(todo => (
            <div key={todo.id} className={styles.todoContainer}>
                <button className={`${styles.btn} ${styles.todoBtn}`} onClick={() => props.onDetailsClick(todo.id)}>
                    <span className={styles.todoText}>{todo.name}</span>
                </button>
                <button className={`${styles.btn} ${styles.deleteBtn}`} onClick={() => props.onDeleteClick(todo.id)}>
                    <i className="fas fa-times"/>
                </button>
            </div>
    ));

    return (
        <div>
            {todos}
        </div>
    );
}
