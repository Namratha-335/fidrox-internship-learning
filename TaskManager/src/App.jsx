
import { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './App.css'
import './index.css'

function App() {
  const [tasks, setTasks] = useState([])

  function addTask(title) {
    const newTask = {
      id: crypto.randomUUID(),
      title: title,
      completed: false
    }

    setTasks(previousTasks => [...previousTasks, newTask])
  }

  function toggleTask(id) {
    setTasks(previousTasks =>
      previousTasks.map(task =>
        task.id === id 
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  function deleteTask(id) {
    setTasks(previousTasks =>
      previousTasks.filter(task => task.id !== id)
    )
  }

  const completedCount = tasks.filter(
    task => task.completed
  ).length

  return (
    <main className="app">
      <h1>Task Manager</h1>
      <p className="subtitle">Organise your day, one task at a time.</p>

      <TaskForm onAddTask={addTask} />

      <div className="task-summary">
        <span>Total: {tasks.length}</span>
        <span>Completed: {completedCount}</span>
        <span>Pending: {tasks.length - completedCount}</span>
      </div>

      <TaskList
        tasks={tasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
    </main>
  )
}

export default App
