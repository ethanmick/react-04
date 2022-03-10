import './App.css'

interface Todo {
  text: string
}

const todos: Todo[] = [
  { text: 'Learn React' },
  { text: 'Learn TypeScript' },
  { text: 'Go outside' }
]

const TodoListItem = ({ text }: Todo) => <li>{text}</li>

interface TodoListProps {
  todos: Todo[]
}

const TodoList = ({ todos }: TodoListProps) => (
  <ul>
    {todos.map(({ text }, index) => (
      <TodoListItem key={index} text={text} />
    ))}
  </ul>
)

const App = () => <TodoList todos={todos} />

export default App
