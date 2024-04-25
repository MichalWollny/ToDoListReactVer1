import React, { useState } from "react";
// import { Edit } from "./Edit";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(-1); // Track the index of the task being edited
  const [editedTask, setEditedTask] = useState("");

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
  //   Edit
  function EditTask(index) {
    setEditIndex(index);
    setEditedTask(tasks[index]);
  }

  // Edit save
  function SaveEditedTask(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editedTask;
    setTasks(updatedTasks);
    setEditIndex(-1); // Reset edit index
  }
  // Edit cansel
  function CancelEdit() {
    setEditIndex(-1);
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
    <div className="to-do-list">
      <h1>To-Do-List</h1>

      <div className="toDoList">
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        {/* Add Button */}
        <button className="add-button" onClick={addTask}>
          Add
        </button>
        {/* Clear Button */}
        <button className="clear-button" onClick={clearAll}>
          🆑
        </button>
      </div>
      <ul>

        {/*  edit button */}
        {tasks.map((task, index) => (
          <li key={index}>
            {editIndex === index ? (
              <input
                type="text"
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
              />
            ) : (
              <span className="text">{task}</span>
            )}

            {/* Delete Button */}
            <button className="barButton " onClick={() => deleteTask(index)}>
              Delete
            </button>

            {/*  edit button */}
            {editIndex === index ? (
              <>
                <button
                  className="barButton "
                  onClick={() => SaveEditedTask(index)}
                >
                  💾
                </button>
                <button className="barButton " onClick={() => CancelEdit()}>
                  🙅
                </button>
              </>
            ) : (
              <button className="barButton " onClick={() => EditTask(index)}>
                Edit
              </button>
            )}

            {/* Up Button */}
            <button className="barButton " onClick={() => moveTaskUp(index)}>
              👆
            </button>

            {/* Down Button  */}
            <button className="barButton " onClick={() => moveTaskDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ToDoList;
