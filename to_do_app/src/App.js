import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';



function Todo({ todo, index, completeTodo, deleteTodo }) {
  //each todo component has the following 'stuff'
  return (
    <div style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }} className="todo">
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => deleteTodo(index)}>X</button>
      </div>
    </div>
  )

}//end of Todo

function TodoForm({ addTodo }) {
  //state of our input value
  const [value, setValue] = useState();

  //on submit, do the following
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Add something Todo" />
    </form>
  )
} //end of TodoForm


function App() {
  //State of our main app
  const [todos, setTodos] = useState([
    {
      text: 'Learn About React',
      isCompleted: false
    }
  ])

  //props or methods of our main app that can update our state
  const addToDo = text => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos);
  };
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);

  };


  /* Lays out a general structure of our Application
  * We map through the todos, and create a Todo 'component' for each one
  * We have a TodoForm 'component' that has an input for the user to add more todods
  */
  return (
    <div className="App">
      <div className="todo-list">
        {/* here we are walking through the todos and displaying them*/}
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
        ))}
        <TodoForm addTodo={addToDo} />
      </div>
    </div>
  );
} //End of App

export default App;
