import React, { useState } from 'react';

function TodoForm(props) {
    const { addTodo } = props
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        //if it's empty don't do anything
        if (!value) return;
        addTodo({ text: value, isComplete: false });//adding current value in the input to our todos
        setValue("");//reseting the input filed
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={value} name="todoInput" placeholder="Enter Todo... " onChange={e => setValue(e.target.value)} />
        </form>
    );

};

export default TodoForm;