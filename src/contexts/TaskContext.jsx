import { createContext, useContext, useState } from 'react'

const TaskContext = createContext()

export default function TaskProvider (props) {
  const [tasks, setTasks] = useState([])

  const addTask = task => {
    setTasks(prev => [...prev, task])
  }

  const deleteTask = id => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}

export function useTasks () {
  console.log('Passing Data around.')
  const context = useContext(TaskContext)
  if (!context) {
    console.error('useTasks must be used within a TaskProvider')
  }
  return context
}
