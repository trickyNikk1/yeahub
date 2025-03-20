import { Link } from 'react-router'

import styles from './styles.module.css'

interface Props {
  children: React.ReactNode
  to: string
}

export const LinkMore = ({ children, to }: Props) => {
  return (
    <Link to={to} className={styles.link}>
      {children}
      <span className={styles.arrow}></span>
    </Link>
  )
}
