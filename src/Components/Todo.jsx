import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Todo({ handleAddNewTask }) {
  const [taskInput, setTaskInput] = useState("");

  const handleaddTask = () => {
    handleAddNewTask(taskInput);
    setTaskInput("");
  };
  return (
    <div className="justify-self-center text-white">
      <div>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="What needs to be done"
          className="bg-gray-700 p-3  w-sm rounded-sm"
        />
        <button
          type="submit"
          onClick={handleaddTask}
          className="bg-lime-500 size-10 font-bold rounded-sm m-2"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Todo;
