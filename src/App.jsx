import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addTodo } from './store/todoSlice'
import NewTodoForm from './components/NewTodoForm'
import Filters from './components/Filters'
import TodoList from './components/TodoList'
import Header from './components/Header'

import styles from './App.module.scss'

function App() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleAction = () => {
    if (text.trim().length > 0) {
      dispatch(addTodo({ text }))
      setText('')
    }
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <NewTodoForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
      <Filters />
      <TodoList />
    </div>
  )
}

export default App
