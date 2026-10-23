import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const [tasks, setTasks] = useState([])

  function addTask(taskText) {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false
    }

    setTasks([...tasks, newTask])
  }

  function deleteTask(id) {
  setTasks(tasks.filter(task => task.id !== id))
}

  function completeTask(id) {
  setTasks(
    tasks.map(task =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    )
  )
}

  return (
    <div>
      <h1>My To-Do List</h1>
      <TodoForm onAddTask={addTask} />
      {tasks.length === 0 ? (
  <p>No tasks available</p>
) : (
  <TodoList
    tasks={tasks}
    onDeleteTask={deleteTask}
    onCompleteTask={completeTask}
  />
)}
    </div>
  )
}

export default App