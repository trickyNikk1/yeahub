import { HtmlHTMLAttributes } from 'react'

import styles from './styles.module.css'

interface Props {
  isOpen: boolean
  textBefore?: string
  textAfter?: string
}

export const ButtonMore = ({
  children,
  className,
  isOpen = false,
  textBefore = 'Развернуть',
  textAfter = 'Свернуть',
  ...props
}: Props & HtmlHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`${styles.button} ${isOpen ? styles.open : ''} ${className ?? ''}`}
      {...props}
    >
      <span>{isOpen ? textAfter : textBefore}</span>
      {children}
      <span className={styles.chevron}></span>
    </button>
  )
}
