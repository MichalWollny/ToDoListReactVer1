import React, { useState } from "react";
import Modal from "./Modal/Modal.jsx";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(-1); // Track the index of the task being edited
  const [editedTask, setEditedTask] = useState("");
  const [check, setcheck] = useState([]);

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  // Add Task
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
    // else {
    //   alert("Mensch schreib doch was...");
    // }
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
  //Check
  function Checker(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    const Check = tasks.filter((_, i) => i == index);
    setTasks(updatedTasks);
    setcheck((t) => [...t, Check]);
  }
  // delete Checklist
  function deleteCheck(index) {
    const updatedTasks = check.filter((_, i) => i !== index);
    setcheck(updatedTasks);
  }
  // Uncheck Button
  //Check
  function UnChecker(index) {
    const updatedTasks = check.filter((_, i) => i !== index);
    const Check = check.filter((_, i) => i == index);
    setcheck(updatedTasks);
    setTasks((t) => [...t, Check]);
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
            // Enter-Key Enabled
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask({ newTask });
                // e.preventDefault(); not needed
              }
            }}
          />
          {/* Add Button */}
          {/* <button className="btnadditem" id="add-btn" onClick={addTask}>
            Add
          </button> */}

          {tasks.length < 0 ? (
            <Modal />
          ) : (
            <button className="add-btn" id="btn" onClick={addTask}>
              Add
            </button>
          )}

          {/* Clear Button */}
          <button className="btnadditem1" onClick={clearAll}>
            Clear All
          </button>
        </div>

        <div className="ulli">
          <ul className="list-group list-group-flush " id="itemlist">
            {tasks.map((task, index) => (
              <li key={index}>
                {editIndex === index ? (
                  <input
                    className="inputadd"
                    type="text"
                    value={editedTask}
                    onChange={(e) => setEditedTask(e.target.value)}
                  />
                ) : (
                  <span className="text">{task}</span>
                )}

                <div className="listedTaskButtons">
                  {/* Delete Button */}
                  <button
                    className="delete-button btnadditem1 barButton"
                    onClick={() => deleteTask(index)}>
                    ❌
                  </button>

                  {/*  edit button */}
                  {editIndex === index ? (
                    <>
                      <button
                        className="btnadditem1 barButton  "
                        onClick={() => SaveEditedTask(index)}>
                        💾
                      </button>
                      <button
                        className="btnadditem1 barButton "
                        onClick={() => CancelEdit()}>
                        🙅
                      </button>
                    </>
                  ) : (
                    <button
                      className="btnadditem1 barButton  "
                      onClick={() => EditTask(index)}>
                      ✍️
                    </button>
                  )}

                  {/* Up Button */}
                  <button
                    className="move-button btnadditem1 barButton"
                    onClick={() => moveTaskUp(index)}>
                    👆
                  </button>
                  {/* Down Button */}
                  <button
                    className="move-button btnadditem1 barButton"
                    onClick={() => moveTaskDown(index)}>
                    👇
                  </button>
                  {/* Check Button */}
                  <button
                    className="check-button btnadditem1 barButton"
                    onClick={() => Checker(index)}>
                    ✅
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="ulli">
          <ul className="list-group list-group-flush" id="itemlist">
            {check.map((task, index) => (
              <li className="checked" key={index}>
                {editIndex === index ? (
                  <input
                    className="inputadd"
                    type="text"
                    value={editedTask}
                    onChange={(e) => setEditedTask(e.target.value)}
                  />
                ) : (
                  <span className="text">{task}</span>
                )}

                <div className="listedTaskButtons">
                  {/* Uncheck Button */}
                  <button
                    className="check-button btnadditem1 barButton"
                    onClick={() => UnChecker(index)}>
                    ⭕
                  </button>
                  {/* Delete Button */}
                  <button
                    className="delete-button btnadditem1 barButton"
                    onClick={() => deleteCheck(index)}>
                    ❌
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default ToDoList;
