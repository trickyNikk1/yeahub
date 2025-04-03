import { HtmlHTMLAttributes } from 'react'

import styles from './styles.module.css'

export const ButtonFilters = ({
  className,
  ...props
}: HtmlHTMLAttributes<HTMLButtonElement>) => (
  <button className={`${styles.button} ${className ?? ''}`} {...props}></button>
)
