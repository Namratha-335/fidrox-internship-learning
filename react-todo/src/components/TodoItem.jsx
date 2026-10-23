function TodoItem({ task, onDeleteTask, onCompleteTask }) {
  return (
    <div className="todo-item">
      <span className={task.completed ? 'completed' : ''}>
        {task.text}
      </span>

      <button onClick={() => onCompleteTask(task.id)}>
        Complete
      </button>

      <button onClick={() => onDeleteTask(task.id)}>
        Delete
      </button>
    </div>
  )
}

export default TodoItem