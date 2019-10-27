import React from 'react';

function Todo(props) {
    const { todo, index, deleteTodo, completeTodo } = props

    return (
        <div style={{ textDecoration: todo.isComplete == true ? 'line-through' : '' }} className='todo'>
            <input type="checkbox" onClick={() => completeTodo(index)} />
            {todo.text}
            <button onClick={() => deleteTodo(index)}>X</button>
        </div>
    );
};//end of Todo

export default Todo;