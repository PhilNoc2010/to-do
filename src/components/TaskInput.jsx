import React from 'react'
import { useState } from 'react'

const TaskInput = (props) => {
    //state variables to capture new tasks added to the list
    // all newly created tasks will have their completion status set to false
    const [task, setTask] = useState("")

    // lift added tasks to app.js for inclusion in the Task List


    const addTask = (e) => {
        e.preventDefault()
        const newTask = {
            task: task,
            completed: false
        }

        props.addTask(newTask)

    }

  return (
    <fieldset>
        <legend>TaskInput.jsx</legend>
        <form onSubmit={addTask}>
            <input placeholder='To Do Item' id='task' onChange={ (e) => setTask(e.target.value) }/>
            <button>Add to List</button>
        </form>
    </fieldset>
  )
}

export default TaskInput