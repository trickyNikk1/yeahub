import { NavLink } from 'react-router'

import { BurgerMenu } from '../BurgerMenu/BurgerMenu'

import styles from './styles.module.css'

const items = [
  <NavLink className={styles.login} to="/login">
    Вход
  </NavLink>,
  <NavLink className={styles.signup} to="/signup">
    Регистрация
  </NavLink>
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
