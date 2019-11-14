import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'
import TodoForm from './TodoForm'

function App() {
  const [todos, setTodos] = useState([
    { text: "Learn react", isComplete: false },
  ])

  const addTodo = todo => {
    const newTodos = [...todos, todo]
    setTodos(newTodos)
  }
  const deleteTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos[index].isComplete = !newTodos[index].isComplete;
    setTodos(newTodos);
  }
  return (
    <div className='App'>
      <div className='todo-list'>
        {todos.map((todo, index) => (
          < Todo key={index} index={index} todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}
export default App;
