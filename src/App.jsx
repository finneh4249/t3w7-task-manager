import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import EditTask from './components/EditTask'
import TaskProvider from './contexts/TaskContext'

function App () {
  return (
    <TaskProvider>
      <Router>
        <div className='container'>
          <h1>Task Manager</h1>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/tasks' element={<Tasks />} />
            <Route path='/add-task' element={<AddTask />} />
            <Route path='/edit-task/:taskId' element={<EditTask />} />
          </Routes>
        </div>
      </Router>
    </TaskProvider>

  )
}

export default App
