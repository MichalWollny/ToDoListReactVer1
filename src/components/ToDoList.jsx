import React, { useState } from "react";
import Modal from "./Modal/Modal";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [editedTask, setEditedTask] = useState("");
  const [check, setcheck] = useState([]);

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, { text: newTask, checked: false }]);
      setNewTask("");
    } else {
      alert("Please enter a task...");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function clearAll() {
    setTasks([]);
  }

  function editTask(index) {
    setEditIndex(index);
    setEditedTask(tasks[index].text);
  }

  function saveEditedTask(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = editedTask;
    setTasks(updatedTasks);
    setEditIndex(-1);
  }

  function cancelEdit() {
    setEditIndex(-1);
  }

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


  function toggleCheck(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].checked = !updatedTasks[index].checked;
    setTasks(updatedTasks);
  }

  // delete Checklist
  function deleteCheck(index) {
    const updatedTasks = check.filter((_, i) => i !== index);
    setcheck(updatedTasks);
  }

  //Check
  function UnChecker(index) {
    const updatedTasks = check.filter((_, i) => i !== index);
    const Check = check.filter((_, i) => i == index);
    setcheck(updatedTasks);
    setTasks((t) => [...t, Check]);
  }

  return (
    <div className="apptodo">
      <div className="d-flex logoh2">
        <img
          src="https://static.vecteezy.com/system/resources/previews/006/549/765/non_2x/to-do-list-hand-drawn-doodle-icon-free-vector.jpg"
          className="imglogo"
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
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask();
            }
          }}
        />
        {tasks.length > 0 ? (
          <Modal />
        ) : (
          <button className="btnadditem1" onClick={addTask}>

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
        )}
        <button className="btnadditem1" onClick={clearAll}>
          Clear All
        </button>
      </div>
      <div className="ulli">
        <ul className="list-group list-group-flush" id="itemlist">
          {tasks.map((task, index) => (
            <li key={index} style={{ textDecoration: task.checked ? "line-through" : "none" }}>
              {editIndex === index ? (
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                />
              ) : (
                <span className="text">{task.text}</span>
              )}
              <div className="listedTaskButtons">
                <button
                  className="delete-button btnadditem1 barButton"
                  onClick={() => deleteTask(index)}
                >
                  ❌
                </button>
                {editIndex === index ? (

                  <>
                    <button
                      className="barButton"
                      onClick={() => saveEditedTask(index)}
                    >
                      💾
                    </button>
                    <button
                      className="barButton"
                      onClick={() => cancelEdit()}
                    >
                      🙅
                    </button>
                  </>
                ) : (
                  <button
                    className="barButton"
                    onClick={() => editTask(index)}
                  >
                    Edit
                  </button>
                )}
                <button
                  className="check barButton"
                  onClick={() => toggleCheck(index)}
                >
                  ✔️
                </button>
                <button
                  className="move-button btnadditem1 barButton"
                  onClick={() => moveTaskUp(index)}
                >
                  👆
                </button>
                <button
                  className="move-button btnadditem1 barButton"
                  onClick={() => moveTaskDown(index)}
                >
                  👇
                </button>
              </div>
            </li>
          ))}

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
