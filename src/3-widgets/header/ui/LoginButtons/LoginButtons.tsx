import { NavLink } from 'react-router'
import styles from './styles.module.css'
import { BurgerMenu } from '../BurgerMenu/BurgerMenu'

const items = [
  <NavLink className={styles.login} to="/login">
    Вход
  </NavLink>,
  <NavLink className={styles.signup} to="/signup">
    Регистрация
  </NavLink>,
]

export const LoginButtons = () => {
  return (
    <>
      <ul className={styles.buttons}>
        {items.map((item, index) => (
          <li key={index} className={styles.item}>
            {item}
          </li>
        ))}
      </ul>
      <BurgerMenu items={items} className={styles.burger} />
    </>
  )
}
