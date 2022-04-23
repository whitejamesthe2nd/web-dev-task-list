import React, {useState,useRef, useEffect} from 'react';
import TodoList from './TodoList';
import {v4 as uuidv4} from 'uuid';

const localStorageKey = "todoApp.todos";

function App() {
  const  [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem(localStorageKey));
    console.log(storedTodos);
    if(storedTodos) setTodos(storedTodos)
  }, [])

  useEffect( ()=>{
    localStorage.setItem(localStorageKey, JSON.stringify(todos));
    let test = localStorage.getItem(localStorageKey);
  }, [todos])

  let handleAddTodo = (e)=>{
    let name = todoNameRef.current.value;
    if(name === '') return;
    console.log(name);
    setTodos( prevTodos => {
      return [...prevTodos, {id: uuidv4(), name:name , complete:false}]
    })
    todoNameRef.current.value = null;


  }
  return (
    <>
      <TodoList todos={todos}/>
      <input type={"text"} ref={todoNameRef}></input>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Complete Todos</button>
      <div>0 left todo</div>
    </>

  );
}

export default App;
