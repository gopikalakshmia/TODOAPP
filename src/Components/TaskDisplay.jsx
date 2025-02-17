import { useState } from "react";

function TaskDisplay({
  task,
  handleEditTask,
  handleDeleteTask,
  handleComplete,
}) {
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState();
  const [taskInput, setTaskInput] = useState();
  const handleEdit = (id, value) => {
    setTaskInput(value);
    setVisible(true);
    setId(id);
  };
  const handleSave = (id, identifier) => {
    handleEditTask(id, taskInput, identifier);
    setVisible(false);
    setId();
    console.log("unchecked")
  };

  const handleDelete = (id) => {
    handleDeleteTask(id);
  };

  return (
    <div>
      <div className="justify-self-center ">
        {task.map((item, index) => (
          <div
            key={index}
            className="border-1 border-amber-100 rounded-sm p-2 m-2 w-md "
          >
            <div>
              {visible && id === item.id ? (
                <>
                  <input
                    type="text"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                  />
                  {!item.completed && <button
                    className="border-1 border-amber-500 rounded-sm m-2"
                    onClick={() => {
                      handleSave(item.id, "Edit");
                    }}
                  >
                    Save
                  </button> }
                </>
              ) : (
                <>
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => {
                      handleSave(item.id, "complete");
                    }}
                    
                  />
                  <span className={`mr-5 ${item.completed? `line-through` :''}`}>{item.task}</span>
                  {!item.completed && <button
                    className="border-1 border-gray-500 rounded-sm m-1"
                    onClick={() => {
                      handleEdit(item.id, item.task);
                    }}
                  >
                    Edit
                  </button>}
                </>
              )}{" "}
            
            
              <button
                className="border-1 border-gray-500 rounded-sm "
                onClick={() => {
                  handleDelete(item.id);
                }}
              >
                Delete
              </button>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskDisplay;
