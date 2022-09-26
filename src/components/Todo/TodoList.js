import { useEffect, useState, useMemo } from 'react';

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
    console.log(taskIsDone);
    setTaskIsDone((prevTaskIsDone) =>{
      return !prevTaskIsDone;
    });
    
    
    // if(taskIsDone){
    //   console.log(props.task);
    //   setCompleteTask((prevCompleteTask) => [...prevCompleteTask, props.task]);
      
    //   console.log(completeTask);
    // } 
  }
  
    

  

  return (
    <li className="todo-item">
      <div className={taskIsDone ? "test task-complete" : "test"}>
        <div className='text'>
          {!taskIsDone && <TbSquare onClick={toggleHandler} className="check-icon" />}
          {taskIsDone && <TbCheckbox onClick={toggleHandler} className="check-icon" />}
          {props.task.task}
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
