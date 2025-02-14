import { useState } from "react";

function TaskDisplay({ task,handleEditTask }) {

    const handleEdit=(id)=>{
        handleEditTask(id);
    }



  return (
    <div>
      <div className="justify-self-center">
        {task.map((item, index) => (
          <div key={index} className="border-1 border-amber-100 rounded-sm p-2 m-2 w-sm" >
            <div>  {item.task} </div>
         <div>
         <button className="border-1 border-gray-500 rounded-sm" onClick={()=>{handleEdit(item.id)}}> Edit</button>
         <button className="border-1 border-gray-500 rounded-sm" onClick={()=>{handleEdit(item.id)}}> Delete</button>
         </div>
       
           </div>
        ))}
      </div>
    </div>
  );
}

export default TaskDisplay;
