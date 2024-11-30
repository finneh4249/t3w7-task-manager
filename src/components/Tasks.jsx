import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useLocalStorage } from 'react-use'
import { useTasks } from '../contexts/TaskContext'

const Tasks = () => {
  const { tasks, deleteTask} = useTasks()

  return (
    <div>
      <h2>Tasks</h2>
      {
                tasks.length === 0
                  ? (
                    <p>No tasks found. <Link to='/add-task'>Add your first task!</Link></p>
                    )
                  : (
                    <ul>
                      {tasks.map((task) =>
                        (<li key={task.id}>
                          <strong>{task.title}</strong>: {task.description}
                          <div>
                            <Link to={`/edit-task/${task.id}`}>Edit</Link> | {' '}
                            <button onClick={() => deleteTask(task.id)}>Delete</button>
                          </div>
                        </li>)
                      )}
                      <button><Link to='/add-task'>Add Task</Link></button>
                    </ul>
                    )
            }
    </div>
  )
}

export default Tasks
