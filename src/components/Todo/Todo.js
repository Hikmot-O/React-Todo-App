import React, { useState } from "react";
import TodoList from "./TodoList";
import "./Todo.css";

// const task = useRef();
const Todo = (props) => {
  const [taskInput, setTaskInput] = useState("");

  const InputChangeHandler = (e) => {
    setTaskInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const taskValue = {
      id: `e${Math.random()}`,
      task: taskInput,
    };

    if (taskInput === "") {
      return;
    }
    props.onAddTask(taskValue);

    setTaskInput("");
  };

  const deleteHandler = (id) => {
    props.onDelete(id);
  };

  return (
    <div className="todo">
      <h1 className="heading">What Are You Doing Today?</h1>
      <form onSubmit={submitHandler}>
        <input
          onChange={InputChangeHandler}
          value={taskInput}
          type="text"
          className="input"
          placeholder="Add a Task"
        ></input>
        <button type="submit" className="btn">
          Add Task
        </button>
      </form>
      <div className="todo-list">
        <ul>
          {props.tasks.map((task) => {
            return (
              <TodoList
                key={task.id}
                id={task.id}
                task={task.task}
                onDelete={deleteHandler}
                tasks={props.tasks}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
