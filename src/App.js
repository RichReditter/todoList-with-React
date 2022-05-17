import React,{useState} from 'react';
import './App.css';
import Task from './Task.js';
function App() {
  const [task,setTask] = useState('');
  const [tasks,setTasks] = useState([])
  const updateTasks = (index) => (
    setTasks( tasks.filter((task,i)=> i!== index)
  ))
  const [filter,setFilter] = useState('');
  
  // const toFilter = () => ({
  //   if(filter == 'by number'){
  //     setTasks( tasks.filter((task,i)=> ))
  //   }
  // }
  // )
  return (
    <div className="App">
      <section>
        <div className="center">
          <div><h1>To Do App</h1></div>
          <div className="form-outline input-container flex">
            <input id="form1" type="text" className="form-control" placeholder="Enter a task here" onChange={(event) => setTask(event.target.value)}/>
            <input type="submit" onClick={()=> setTasks([...tasks, task])}className="btn btn-primary add" value="Add a task"/>
          </div>
        </div>
        <div>
          <select name="select" onChange={(event) => setFilter(event.target.value)}>
            <option selected >by number</option>
            <option value="length">by task length</option>
            <option value="unfinished">unfinished first</option>
          </select>
        </div>
        <div>
        <table className="table mb-4">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Todo item</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map( (task,number) => 
                  <Task task={task} number={number} key={number} onUpdateTasks={updateTasks}/>
                )}
              </tbody>
            </table>
        </div>
      </section>
    </div>
  );
}

export default App;
