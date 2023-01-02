import { useState, useReducer, useEffect } from "react";

import Todo from "./components/Todo/Todo";
import "./App.css";

function App() {
  const initialState = {
    TASKS: [],
    completedTASKS: [],
    unCompletedTASKS: [],
    totalTasks: 0,
    totalCompleted: 0,
  };

  const TASK_StateReducer = (state, action) => {
    if (action.type === "ADD_TASK") {
      return {
        TASKS: [action.value, ...state.TASKS],
        completedTASKS: state.completedTASKS,
        unCompletedTASKS: state.unCompletedTASKS,
        totalTasks: state.unCompletedTASKS.length,
        totalCompleted: state.completedTASKS.length,
      };
    }

    if (action.type === "DELETE_TASK") {
      return {
        TASKS: state.TASKS.filter((task) => task.id !== action.value),
        completedTASKS: state.completedTASKS,
        unCompletedTASKS: state.unCompletedTASKS,
        totalTasks: state.unCompletedTASKS.length,
        totalCompleted: state.completedTASKS.length,
      };
    }

    if (action.type === "TOGGLE") {
      const taskIndex = state.TASKS.findIndex(
        (task) => task.id === action.value.id
      );

      const newTASKS = state.TASKS.map((task) => {
        return task;
      });

      newTASKS[taskIndex] = {
        ...newTASKS[taskIndex],
        taskComplete: !newTASKS[taskIndex].taskComplete,
      };
      return {
        TASKS: newTASKS,
        completedTASKS: state.completedTASKS,
        unCompletedTASKS: state.unCompletedTASKS,
        totalTasks: state.unCompletedTASKS.length,
        totalCompleted: state.completedTASKS.length,
      };
    }

    if (action.type === "COMPLETE_TASKS") {
      const completeTASKS = state.TASKS.filter(
        (task) => task.taskComplete === true
      );
      return {
        TASKS: state.TASKS,
        completedTASKS: completeTASKS,
        unCompletedTASKS: state.unCompletedTASKS,
        totalTasks: state.unCompletedTASKS.length,
        totalCompleted: completeTASKS.length,
      };
    }

    if (action.type === "INCOMPLETE_TASKS") {
      const inCompleteTASKS = state.TASKS.filter(
        (task) => task.taskComplete !== true
      );
      return {
        TASKS: state.TASKS,
        completedTASKS: state.completedTASKS,
        unCompletedTASKS: inCompleteTASKS,
        totalTasks: inCompleteTASKS.length,
        totalCompleted: state.completedTASKS.length,
      };
    }

    if (action.type === "EDIT_TASK") {
      const taskIndex = state.TASKS.findIndex(
        (task) => task.id === action.value.id
      );

      const newTASKS = state.TASKS.map((task) => {
        return task;
      });

      newTASKS[taskIndex] = {
        ...newTASKS[taskIndex],
        task: action.value.input,
      };

      return {
        TASKS: newTASKS,
        completedTASKS: state.completedTASKS,
        unCompletedTASKS: state.unCompletedTASKS,
        totalTasks: state.unCompletedTASKS.length,
        totalCompleted: state.completedTASKS.length,
      };
    }

    return initialState;
    // return {
    //   TASKS: [],
    //   completedTASKS: [],
    //   unCompletedTASKS: [],
    //   totalTasks: 0,
    //   totalCompleted: 0,
    // };
  };

  const [TASKS_State, dispatchFn] = useReducer(TASK_StateReducer, initialState);

  // const [taskIsDone, setTaskIsDone] = useState(false);

  const addTaskHandler = (task) => {
    dispatchFn({ type: "ADD_TASK", value: task });
  };

  const deleteHandler = (id) => {
    dispatchFn({ type: "DELETE_TASK", value: id });
  };

  const toggleHandler = (id) => {
    // setTaskIsDone((prev) => !prev); need to revisit how to set if todo is done from app and not todolist

    dispatchFn({ type: "TOGGLE", value: { id } });
  };

  const editTaskHandler = (input, id) => {
    dispatchFn({ type: "EDIT_TASK", value: { input, id } });
  };


  //////I need to find a better way to implement this/////////
  useEffect(() => {
    dispatchFn({ type: "COMPLETE_TASKS" });
    dispatchFn({ type: "INCOMPLETE_TASKS" });
  }, [TASKS_State.TASKS]); //Changed from TASKS to TASKS_State.TASKS

  return (
    <div className="app">
      <Todo
        onDelete={deleteHandler}
        onAddTask={addTaskHandler}
        onToggle={toggleHandler}
        onEditTask={editTaskHandler}
        tasks={TASKS_State.unCompletedTASKS}
        completed={TASKS_State.completedTASKS}
        totalTasks={TASKS_State.totalTasks}
        totalCompleted={TASKS_State.totalCompleted}
        // done={taskIsDone}
      ></Todo>
    </div>
  );
}

export default App;
