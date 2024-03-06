import { useSelector } from 'react-redux'
import styles from './Counter.module.scss'

const Counter = () => {
  const active = useSelector(
    (state) => state.todos.list.filter((todo) => todo.completed === false).length,
  )
  const completed = useSelector(
    (state) => state.todos.list.filter((todo) => todo.completed === true).length,
  )

  return (
    <div className={styles.counter}>
      <div className={styles.item}>Active: {active}</div>
      <div className={styles.item__completed}>Completed: {completed}</div>
    </div>
  )
}

export default Counter
