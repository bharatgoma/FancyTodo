import React, { useState } from 'react'

const TodosForm = ({addTodo}) => {

    const [activity,setActivity] = useState("");

// const handleSubmit=(e)=>{
//    e.preventDefault();
//    addTodo(activity);
//    setActivity("");
  
// }

const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the activity is not empty or blank before adding it as a todo
    if (activity.trim() !== "") {
      addTodo(activity);
      setActivity("");
    }
  };
const handleChange=(e)=>{
    e.preventDefault();
    setActivity(e.target.value);
 }

 
  return (
    <form onSubmit={handleSubmit}>
        <h1>TODO's LIST</h1>
        <input onChange={handleChange} value={activity} type="text" placeholder='Enter Your Todos'/>
         <button className='btn'>Add Task</button>
    </form>
  )
}

export default TodosForm