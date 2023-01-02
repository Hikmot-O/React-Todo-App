import React, { useState } from "react";

import { TbEdit, TbCheckbox, TbSquare } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";

import "./TodoList.css";

const CompletedTasks = (props) => {
  const [done, setDone] = useState(false);

  const deleteHandler = () => {
    props.onDelete(props.task.id);
  };

  const toggleHandler = () => {
    props.onToggleTodo(props.task.id);

    setDone(true);
  };

  return (
    <div>
      <li className="todo-item">
        <div className="test">
          <div className="test task-complete">
            {!done && (
              <TbCheckbox onClick={toggleHandler} className="check-icon" />
            )}
            {done && (
              <TbSquare onClick={toggleHandler} className="check-icon" />
            )}
            {/* <TbCheckbox className="check-icon" /> */}
            {props.task.task}
          </div>

          <div className="icon-container">
            <RiDeleteBinLine className="icon" onClick={deleteHandler} />
          </div>
        </div>
      </li>
    </div>
  );
};

export default CompletedTasks;
