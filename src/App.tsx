import React, { useState } from 'react'
import './App.css'
import { useSavedState } from './use-saved-state'

interface Todo {
  text: string
}

interface AddTodoProps {
  onAddTodo: (text: string) => void
}

const AddTodo = ({ onAddTodo }: AddTodoProps) => {
  const [text, setText] = useState('')

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddTodo(text)
    setText('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  )
}

const TodoListItem = ({ text }: Todo) => <li>{text}</li>

interface TodoListProps {
  name: string
}

const TodoList = ({ name }: TodoListProps) => {
  const [todos, setTodos] = useSavedState<Todo[]>(`todo-list-${name}`, [])

  const onAddTodo = (text: string) => {
    setTodos([...todos, { text }])
  }

  return (
    <div className="container">
      <AddTodo onAddTodo={onAddTodo} />
      <ul>
        {todos.map(({ text }, index) => (
          <TodoListItem key={index} text={text} />
        ))}
      </ul>
    </div>
  )
}

const App = () => <TodoList name="Default" />

export default App
