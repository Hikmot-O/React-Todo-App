import React, { useState } from "react";
import TodoList from "./TodoList";
import CompletedTasks from "./CompletedTasks";
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
      taskComplete: false,
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

  const toggleHandler = (id) => {
    props.onToggle(id);
  };

  const editHandler = (input, id) => {
    props.onEditTask(input, id);
  }

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
        <h3>Uncompleted Tasks: {props.totalTasks}</h3>
        <ul>
          {props.tasks.map((task) => {
            return (
              <TodoList
                key={task.id}
                id={task.id}
                task={task}
                tasks={props.tasks}
                done={props.done}
                onDelete={deleteHandler}
                onToggleTodo={toggleHandler}
                onEdit={editHandler}
              />
            );
          })}
        </ul>
      </div>

      <div>
        <h3>Completed Tasks: {props.totalCompleted}</h3>
        <ul>
          {props.completed.map((task) => {
            return (
              <CompletedTasks
              key={task.id}
              task={task}
                completed={props.completed}
                onDelete={deleteHandler}
                onToggleTodo={toggleHandler}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
