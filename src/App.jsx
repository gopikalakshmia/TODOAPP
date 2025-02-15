
import './App.css'
import TaskDisplay from './Components/TaskDisplay';
import Todo from './Components/Todo';
import {  useState } from "react";

function App() {

  const [task,setTask]=useState([]);
  const handleAddNewTask=(taskInput)=>{
    setTask(prevtask=>[...prevtask,{id:Math.floor(Math.random()*100)+1 ,task:taskInput}]);
  }
  const handleEditTask=(id,ChangedTaskInput)=>{
    const unChangedTask=task.filter((item)=>item.id!==id);
    setTask([...unChangedTask,{id:id,task:ChangedTaskInput}])

  }
  const handleDeleteTask=(id)=>{
    const unChangedTask=task.filter((item)=>item.id!==id);
    setTask([...unChangedTask])

  }
  return (
    <div className='bg-black text-white bg-cover object-cover'>
     <Todo handleAddNewTask={handleAddNewTask} />
     <TaskDisplay task={task} handleEditTask={handleEditTask} handleDeleteTask={handleDeleteTask}/>
    </div>
  )
}

export default App
