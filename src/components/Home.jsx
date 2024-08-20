import React, { useEffect, useState } from 'react'
import Tasks from './Tasks'
const Home = () => {
  const initialarray = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
  const [tasks,setTask]=useState(initialarray);
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const submitHandler = (e)=>{
    e.preventDefault();
    setTask([...tasks,{title,description}]);
    setTitle("");
    setDescription("");
  }
  const deleteTask = (index)=>{
    const filteredarray = tasks.filter((val,i)=>{
      return i!==index;
    });  
    console.log(filteredarray);
    setTask(filteredarray);
  }   
  const mystyle={
    fontFamily: '"Playfair Display", serif', // Corrected this line
    fontWeight: '600',
    fontStyle: 'italic',
  }
  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  },[tasks])
  return (
    <div className='container'>
        <h4 style={mystyle}>Set Your Daily Targets</h4>
        <form onSubmit={submitHandler}>
            <input type='text' placeholder='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <textarea placeholder='description' value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
            <button type='submit'>ADD</button>
        </form>
      {tasks.map((item,index)=>(
        <Tasks key={index} title={item.title} description={item.description} deleteTask={deleteTask} index={index}/>
      ))}
    </div>
  ) 
}

export default Home
 