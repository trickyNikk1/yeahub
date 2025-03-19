import { LoginButtons } from '../LoginButtons/LoginButtons'
import { Navigation } from '../Navigation/Navigation'

import styles from './styles.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Navigation />
        <LoginButtons />
      </div>
    </header>
  )
}
