import { useState } from 'react'

function TodoForm({ onAddTask }) {
  function handleAddTask() {
  onAddTask(task)
  setTask('')
}
  const [task, setTask] = useState('')

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={handleAddTask}>Add Task</button>
    </div>
  )
}

export default TodoForm