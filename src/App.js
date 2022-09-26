import { useState } from 'react';

import Todo from './components/Todo/Todo';
import './App.css';

function App() {
  const [TASKS, setTASKS] = useState([]);

  const addTaskHandler = (task) =>{
    setTASKS(previousTasks => [task, ...previousTasks])
  }
  
  const deleteHandler = (id) =>{
    setTASKS(previousTasks =>{
       return previousTasks.filter(task => task.id !== id)
    });
  }
  
  return (
    <div className='app'>
      <Todo onDelete={deleteHandler} onAddTask={addTaskHandler} tasks={TASKS}></Todo>
    </div>
      
  );
}

export default App;
