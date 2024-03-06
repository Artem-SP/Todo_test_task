import { useDispatch } from 'react-redux'
import { toggleComplete } from '../store/todoSlice'

import styles from './TodoItem.module.scss'

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch()

  return (
    <div className={styles.list}>
      <li
        className={completed ? styles.completed : ''}
        onClick={() => dispatch(toggleComplete({ id }))}
      >
        {text}
      </li>
    </div>
  )
}

export default TodoItem
