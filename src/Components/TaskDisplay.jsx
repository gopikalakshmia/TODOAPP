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
      <div className=" ">
        <div className="p-5"></div>
        {task.map((item, index) => (
          <div
            key={index}
            className="border-1 border-gray-700 rounded-sm p-4 m-2 w-md flex flex-row"
          >
            <div>
              {visible && id === item.id ? (
                <>
                  <input
                    type="text"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                    className="text-white border-1 border-gray-600 rounded-sm p-2"
                  />
                  {!item.completed && <button
                    className="border-1 border-amber-500 rounded-md m-2"
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
                    className="size-5 justify-start m-2 "
                  />
                  <span className={`mr-5 text-xl mb-1 font-semibold  ${item.completed? `line-through` :''}`}>{item.task}</span>
                  {!item.completed && <button
                    className="border-1 border-gray-500 rounded-sm m-1 "
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
