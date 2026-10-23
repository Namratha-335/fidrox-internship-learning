
function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span className="task-title">{task.title}</span>

      <div className="task-actions">
        <button
          type="button"
          className="complete-button"
          onClick={() => onToggleTask(task.id)}
        >
          {task.completed ? 'Undo' : 'Complete'}
        </button>

        <button
          type="button"
          className="delete-button"
          onClick={() => onDeleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default TaskItem
