import { useSelector } from 'react-redux'

import TodoItem from './TodoItem'
import { selectTodosByFilter } from '../store/selectors'
import styles from './TodoList.module.scss'

const TodoList = () => {
  const todos = useSelector(selectTodosByFilter)

  return (
    <ul className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  )
}

export default TodoList
