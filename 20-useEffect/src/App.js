/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    console.log('callback in useEffect');
    fetch('https://jsonplaceholder.typicode.com/todos/4')
      .then(response => response.json())
      .then(json => setTodo(json));
  }, []);

  console.log('app rendred');
  console.log(todo);

  return <div className='App'>{todo && <h1>{todo.title}</h1>}</div>;
}

export default App;
