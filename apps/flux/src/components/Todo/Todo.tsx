import './Todo.scss'
import classNames from 'classnames'
import { toggleTodoComplete, deleteTodo } from '../../actions'

export type Todo = {
  id: string | number
  desc: string
  completed: boolean
}

export const Todo = ({ todo }: { todo: Todo }) => {
  const modifierClasses = classNames({
    'Todo--is-completed': todo.completed,
  })

  return (
    <div className={`Todo ${modifierClasses}`}>
      <label className="Todo__label" htmlFor={`todo-${todo.id}`}>
        <input
          id={`todo-${todo.id}`}
          className="Todo__checkbox"
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodoComplete(todo.id)}
        />
        <span className="Todo__desc">{todo.desc}</span>
      </label>
      <button
        className="Todo__delete-button"
        type="button"
        onClick={() => {
          deleteTodo(todo.id)
        }}
      >
        &times;
      </button>
    </div>
  )
}
