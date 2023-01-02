import { useState, useRef } from "react";

import { TbEdit, TbCheckbox, TbSquare } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";

import "./TodoList.css";

const TodoList = (props) => {
  const [done, setDone] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const editInputRef = useRef();
  // const [inputEdit, setInputEdit] = useState('');

  

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  const toggleHandler = () => {
    props.onToggleTodo(props.task.id);

    setDone(true);
  };

  const editHandler = () => {
    setIsEdit(true);
  };
  
  const editSubmitHandler = (e) =>{
    e.preventDefault();
    props.onEdit(editInputRef.current.value, props.id);
    setIsEdit(false);
  }

  return (
    <li className="todo-item">
      <div className="test">
        <div className={done ? "test task-complete" : "test"}>
          <div className="icon-container">
            {!done && (
              <TbSquare onClick={toggleHandler} className="icon check-icon" />
            )}
            {done && (
              <TbCheckbox onClick={toggleHandler} className=" icon check-icon" />
            )}
          </div>
          {!isEdit && <div className="todo-text">{props.task.task}</div>}
          {isEdit && (
            <form onSubmit={editSubmitHandler}>
              <input type="text" className="edit-input" ref={editInputRef} />
            </form>
          )}
        </div>

        <div className="icon-container">
          <RiDeleteBinLine className="icon" onClick={deleteHandler} />
          <TbEdit className="icon" onClick={editHandler} />
        </div>
      </div>
    </li>
  );
};

export default TodoList;
