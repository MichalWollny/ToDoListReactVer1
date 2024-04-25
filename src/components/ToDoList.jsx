import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  // Add Task
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }
  // Delete Task
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }
  // Clear All
  function clearAll() {
    setTasks([]);
  }
  // Move Up
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  // Move Down
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div>
      <div className="apptodo">
        <div className="d-flex logoh2">
          <img
            src="https://static.vecteezy.com/system/resources/previews/006/549/765/non_2x/to-do-list-hand-drawn-doodle-icon-free-vector.jpg"
            class="imglogo"
            alt="logo"
          />
          <h1>To-Do-List</h1>
        </div>
        <div className="inputbtn">
          <input
            type="text"
            className="add"
            id="add"
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInputChange}
          />
          {/* Add Button */}
          <button className="btnadditem" id="add-btn" onClick={addTask}>
            Add
          </button>
          {/* Clear Button */}
          <button className="btnadditem1" onClick={clearAll}>
            Clear All
          </button>
        </div>
        <div className="ulli">
          <ul className="list-group list-group-flush " id="itemlist">
            {tasks.map((task, index) => (
              <li key={index} className="list-group-item">
                <span className="text">{task}</span>
                {/* Delete Button */}
                <button
                  className="delete-button btnadditem1"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
                {/* Up Button */}
                <button
                  className="move-button btnadditem1"
                  onClick={() => moveTaskUp(index)}
                >
                  Up
                </button>
                {/* Down Button */}
                <button
                  className="move-button btnadditem1"
                  onClick={() => moveTaskDown(index)}
                >
                  Down
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default ToDoList;
