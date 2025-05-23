import { NavLink } from 'react-router'

import { LogoWithText } from '../LogoWithText/LogoWithText'
import { Dropdown } from '../Dropdown/Dropdown'

import styles from './styles.module.css'

const items = [
  <NavLink to={'/questions'}>База вопросов</NavLink>,
  <NavLink to={'/trainer'}>Тренажер</NavLink>
]

export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <NavLink to={'/'}>
        <LogoWithText />
      </NavLink>
      <Dropdown title="Подготовка" items={items} className={styles.dropdown} />
      <ul className={styles.list}>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  )
}
