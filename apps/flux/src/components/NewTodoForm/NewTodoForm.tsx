import React, { useState } from 'react'
import './NewTodoForm.scss'
import { createTodo } from '../../actions'

export const NewTodoForm = () => {
  const [newTodoDesc, setNewTodoDesc] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (newTodoDesc) {
      createTodo(newTodoDesc)
      setNewTodoDesc('')
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setNewTodoDesc(event.target.value)

  return (
    <div className="NewTodoForm">
      <form className="NewTodoForm__form" onSubmit={handleSubmit}>
        <label className="NewTodoForm__label">
          New todo:
          <input
            className="NewTodoForm__text-input"
            type="text"
            value={newTodoDesc}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
