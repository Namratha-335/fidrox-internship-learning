import TodoItem from './TodoItem'

function TodoList({ tasks, onDeleteTask, onCompleteTask }) {
  return (
    <div>
      {tasks.map(task => (
        <TodoItem
        key={task.id}
        task={task}
        onDeleteTask={onDeleteTask}
        onCompleteTask={onCompleteTask}
        />
      ))}
    </div>
  )
}

export default TodoList