import { LoginButtons } from '../LoginButtons/LoginButtons'
import styles from './styles.module.css'
import { Navigation } from '../Navigation/Navigation'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Navigation />
        <LoginButtons />
      </div>
    </header>
  )
}
