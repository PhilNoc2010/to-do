import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { useState } from 'react'

function App() {

  const [taskList, setTaskList] = useState([
    {
      task: "Complete To Do List",
      completed: true
    },
    {
      task: "Fix Leaky Faucet",
      completed: false
    },
    {
      task: "Fix Flat Tire",
      completed: false
    }
  ])

  const addTask = (newTask) => {
    setTaskList([...taskList, newTask])
  }



  /**
   * This is a cool function to show progress
   * @param {index value of selected task} idx
   */
  const updateTask = (idx) => {
    // make a temporary copy of the task List state variable that can be updated
    // and pushed back
    const copyTaskList = [...taskList]

    //update to the opposite value
    copyTaskList[idx].completed = !copyTaskList[idx].completed

    // replace the state with the updated copy
    setTaskList(copyTaskList)
  }

  const deleteTask = (deleteidx) => {
    //make a filtered copy of the task list without the task that is being removed
    const filteredTask = taskList.filter((elem, idx) => {
      return idx !== deleteidx
    })
    setTaskList(filteredTask)
  }


return (
  <div className="App">
    <fieldset>
      <legend>app.js</legend>
      <h1>To Do List</h1>
      <TaskInput addTask={addTask} />
      <TaskList taskList={taskList}
        updateTask={updateTask}
        deleteTask={deleteTask}/>
    </fieldset>
  </div>
);
}

export default App;
