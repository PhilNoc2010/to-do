import React from 'react'

const TaskList = (props) => {

    const handleCheckbox = (i)  => {
        // Lift the state of the updated task to app.js
        props.updateTask(i)

    }

    const deleteTask = (i) => {
        // lift the index of the deleted task to app.js for processing
        props.deleteTask(i)
    }


    return (
        <fieldset>
            <legend>TaskList.jsx</legend>
            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Completed</th>
                        <th>Remove Task</th>
                    </tr>
                </thead>
                <tbody>
                    {props.taskList.map((task, i) => {
                        return <tr key={i}>
                        <td style={{textDecoration: task.completed ? "line-through" : "none"}}>{task.task}</td>
                        <td><input checked={task.completed} type="checkbox" onChange={() => handleCheckbox(i)}/></td>
                        <td><button onClick={ () => deleteTask(i)}>Delete Task</button></td>
                    </tr>
                    })
                    }
                </tbody>

            </table>
        </fieldset>
    )
}

export default TaskList;