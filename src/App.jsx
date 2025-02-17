
import './App.css'
import Header from './Components/Header';
import TaskDisplay from './Components/TaskDisplay';
import Todo from './Components/Todo';
import {  useState } from "react";

function App() {

  const [task,setTask]=useState([]);
  const handleAddNewTask=(taskInput)=>{
    setTask(prevtask=>[...prevtask,{id:Math.floor(Math.random()*100)+1 ,task:taskInput,completed:false}]);
  }
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

  return (
    <div className='bg-black text-white justify-self-center  border-lime-600 border-2 rounded-md p-20 m-10'>
      <Header/>
     <Todo handleAddNewTask={handleAddNewTask} />
     <TaskDisplay task={task} handleEditTask={handleEditTask} handleDeleteTask={handleDeleteTask} />
    </div>
  )
}

export default App
