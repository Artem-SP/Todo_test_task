import Counter from './Counter'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Todo list</h1>
      <Counter />
    </div>
  )
}

export default Header
