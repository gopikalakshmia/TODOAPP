import { useState } from "react";

function TaskDisplay({ task }) {
    const [taskInput,setTaskInput]=useState();
    const handleEdit=(identifier,id)=>{

    }



  return (
    <div>
      <div className="justify-self-center">
        {task.map((item, index) => (
          <div key={index} className="border-1 border-amber-100 rounded-sm p-2 m-2 w-sm" >
            <input type="text" value={item} onChange={(e)=>setTaskInput(e.target.value)} className="bg-gray-700 p-1  w-sm rounded-sm"/>
           {item.task} 
           <button className="border-1 border-gray-500 rounded-sm" onClick={()=>{handleEdit('edit',item.id)}}> Edit/save</button></div>
        ))}
      </div>
    </div>
  );
}

export default TaskDisplay;
