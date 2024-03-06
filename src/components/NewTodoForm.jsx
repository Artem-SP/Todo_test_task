import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { addTodo } from '../store/todoSlice'
import styles from './NewTodoForm.module.scss'

const NewTodoForm = () => {
  const [text, setText] = useState('')
  const [lengthError, setLengthError] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (text.trim().length === 30) setLengthError(true)
    if (lengthError && text.trim().length < 30) setLengthError(false)
  }, [text])

  const handleAction = () => {
    if (text.trim().length > 0) {
      dispatch(addTodo({ text }))
      setText('')
    }
  }

  return (
    <div className={styles.todoForm}>
      <div className={styles.error}>
        {lengthError && <p>Todo name should not be longer than 30 letters</p>}
      </div>
      <div className={styles.inputBlock}>
        <input
          className={styles.input}
          value={text}
          placeholder="Add todo"
          onChange={(event) => setText(event.target.value)}
        />

        <button
          className={styles.button}
          disabled={lengthError}
          onClick={handleAction}
        >
          Add todo
        </button>
      </div>
    </div>
  )
}

export default NewTodoForm
