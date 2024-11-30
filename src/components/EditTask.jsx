import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useTasks } from '../contexts/TaskContext'

const EditTask = () => {
  const navigate = useNavigate()

  const [task, setTask] = useState({
    title: '',
    description: ''
  })
  const { taskId } = useParams()

  const { tasks, editTask } = useTasks()

  useEffect(() => {
    const taskToEdit = tasks.find(task => task.id === taskId)
    if (taskToEdit) {
      setTask(taskToEdit)
    } else {
      console.log(`Task with ID ${taskId} not found`)
      navigate('/tasks')
    }
  }, [taskId])

  const handleChange = e => {
    const { name, value } = e.target
    setTask(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    editTask(task)
    navigate('/tasks')
  }
  return (
    <div>
      <h2>Edit Task</h2>
      <p>Task ID: {taskId} </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input
            type='text'
            name='title'
            placeholder='Title'
            value={task.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description: </label>
          <input
            type='textarea'
            name='description'
            value={task.description}
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Edit Task</button>
      </form>
    </div>
  )
}

export default EditTask
