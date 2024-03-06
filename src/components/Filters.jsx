import { useDispatch } from 'react-redux'

import { changeFilter } from '../store/filterSlice'

import styles from './Filters.module.scss'

const Filters = () => {
  const dispatch = useDispatch()

  return (
    <>
      <h3>Filter by:</h3>
      <div className={styles.filtersBlock}>
        <div
          className={styles.all}
          onClick={() => dispatch(changeFilter('all'))}
        >
          All
        </div>
        <div
          className={styles.completed}
          onClick={() => dispatch(changeFilter('completed'))}
        >
          Completed
        </div>
        <div
          className={styles.active}
          onClick={() => dispatch(changeFilter('active'))}
        >
          Active
        </div>
      </div>
    </>
  )
}

export default Filters
