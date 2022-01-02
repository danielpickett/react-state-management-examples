import dispatcher, { Id } from '../dispatcher'

export const createTodo = (desc: string) => {
  dispatcher.dispatch({
    type: 'CREATE_TODO',
    desc,
  })
}

export const toggleTodoComplete = (id: Id) => {
  dispatcher.dispatch({
    type: 'TOGGLE_TODO_COMPLETE',
    id,
  })
}

export const deleteTodo = (id: Id) => {
  dispatcher.dispatch({
    type: 'DELETE_TODO',
    id,
  })
}
