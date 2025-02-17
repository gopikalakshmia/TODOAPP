
import './App.css'
import Footer from './Components/Footer';
import Header from './Components/Header';
import TaskDisplay from './Components/TaskDisplay';
import Todo from './Components/Todo';
import {  useEffect, useState } from "react";

function App() {

  const [task,setTask]=useState([]);
  const [filteredTask,setFilteredTask]=useState([]);
  const handleAddNewTask=(taskInput)=>{
    setTask(prevtask=>[...prevtask,{id:Math.floor(Math.random()*100)+1 ,task:taskInput,completed:false}]);
  }
useEffect(()=>{
  setFilteredTask([...task]);
},[task])

  const handleEditTask=(id,ChangedTaskInput,identifier)=>{
    const unChangedTask=[...task.filter((item)=>item.id!==id)];
    let editedTask=task.find((item)=>item.id===id);
    console.log(editedTask);
    if(identifier==="Edit")
    setTask([...unChangedTask,{...editedTask,task:ChangedTaskInput}]);
  if(identifier==="complete")
  setTask([...unChangedTask,{...editedTask,completed:!editedTask.completed}]);

  }
  const handleDeleteTask=(id)=>{
    const unChangedTask=task.filter((item)=>item.id!==id);
    setTask([...unChangedTask])

  }
  const handleFilter=(identifier)=>{
    if(identifier==='all')
     {
      console.log('all');
      setFilteredTask([...task])
     }
    else if(identifier==='active')
     {
      console.log('active');
      const activeTask=task.filter((item)=>item.completed===false);
      console.log(activeTask);
      setFilteredTask([...activeTask])
     }
    else if(identifier==='completed')
    {
      const completedTask=task.filter((item)=>item.completed===true);
      setFilteredTask([...completedTask])
    }
  }

  return (
    <div className='bg-black text-white justify-self-center  border-lime-600 border-2 rounded-md p-20 m-10'>
      <Header/>
     <Todo handleAddNewTask={handleAddNewTask} />
     <TaskDisplay task={filteredTask} handleEditTask={handleEditTask} handleDeleteTask={handleDeleteTask} />
    { task.length>0 && <Footer handleFilter={handleFilter}/>}

    </div>
  )
}

export default App
