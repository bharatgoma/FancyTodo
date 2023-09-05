import React, { useEffect, useState } from 'react'
import TodosForm from './TodosForm'
import Todos from './Todos'

const TodosWrapper = () => {

  const [list,setList] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setList(savedTodos);
}, []);

  const addTodo=(newTodo)=>{
      const newTodos = [newTodo,...list];
      setList(newTodos);
      localStorage.setItem('todos',JSON.stringify(newTodos))
  }

  const RemoveAll=()=>{
      const removed = [];
      setList(removed);
      localStorage.setItem('todos',JSON.stringify(removed));
  }

  return (
    <div className='todoswrapper'>
        <TodosForm addTodo={addTodo}/>
        <Todos RemoveAll={RemoveAll} list={list}/>

    </div>
  )
}

export default TodosWrapper