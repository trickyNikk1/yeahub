import { HtmlHTMLAttributes } from 'react'

import styles from './styles.module.css'

interface Props {
  icon?: 'filters' | 'diploma'
}
export const ButtonFilters = ({
  icon = 'filters',
  className,
  ...props
}: Props & HtmlHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={`${styles.button} ${styles[icon]} ${className ?? ''}`}
    {...props}
  ></button>
)
