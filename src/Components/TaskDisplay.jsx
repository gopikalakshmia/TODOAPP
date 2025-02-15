import { useState } from "react";

function TaskDisplay({ task,handleEditTask,handleDeleteTask }) {

  const [visible,setVisible]=useState(false);
  const [id,setId]=useState();
  const [taskInput,setTaskInput]=useState();
    const handleEdit=(id,value)=>{
      setTaskInput(value);
        setVisible(true);
        setId(id);
  
    }
    const handleSave=(id)=>{
      handleEditTask(id,taskInput);
      setVisible(false);
      setId();
    }

const handleDelete=(id)=>{
  handleDeleteTask(id);
}


  return (
    <div>
      <div className="justify-self-center">
        {task.map((item, index) => (
          <div key={index} className="border-1 border-amber-100 rounded-sm p-2 m-2 w-sm" >
            <div> {(visible && id===item.id)?<><input type="text" value={taskInput} onChange={(e)=>setTaskInput(e.target.value)}/>
            <button className="border-1 border-amber-500 rounded-sm" onClick={()=>{handleSave(item.id)}}> Save</button>
            </>:<> {item.task }  <button className="border-1 border-gray-500 rounded-sm" onClick={()=>{handleEdit(item.id,item.task)}}> Edit</button></>}  </div>
         <div>
         
         
     
         <button className="border-1 border-gray-500 rounded-sm" onClick={()=>{handleDelete(item.id)}}> Delete</button>
         </div>
       
           </div>
        ))}
      </div>
    </div>
  );
}

export default TaskDisplay;
