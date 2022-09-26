import { useState } from 'react';

import { TbEdit, TbCheckbox, TbSquare } from "react-icons/tb";
import { RiDeleteBinLine, RiCheckboxCircleFill } from "react-icons/ri";
// import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

import "./TodoList.css";

const TodoList = (props) => {
  const [taskIsDone, setTaskIsDone] = useState(false);
  const [completeTask, setCompleteTask] = useState([]);
  const [InompleteTask, setIncompleteTask] = useState([]);

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  const toggleHandler = () =>{
    setTaskIsDone(previous => !previous);

    // console.log(props.tasks);

    if(taskIsDone === true){
      setCompleteTask((prevCompleteTasks) => [...prevCompleteTasks, props.tasks])
    }
    console.log(completeTask);
    
  }

  return (
    <li className="todo-item">
      <div className={taskIsDone ? "test task-complete" : "test"}>
        <div className='text'>
          {!taskIsDone && <TbSquare onClick={toggleHandler} className="check-icon" />}
          {taskIsDone && <TbCheckbox onClick={toggleHandler} className="check-icon" />}
          {props.task}
        </div>

        <div className="icon-container">
          <RiDeleteBinLine className="icon" onClick={deleteHandler} />
          <TbEdit className="icon" />
        </div>
      </div>
    </li>
  );
};

export default TodoList;