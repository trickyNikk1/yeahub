import { HtmlHTMLAttributes } from 'react'

import styles from './styles.module.css'

interface Props {
  direction?: 'left' | 'right' | 'down'
}

export const ButtonCaret = ({
  children,
  className,
  direction = 'left',
  ...props
}: Props & HtmlHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={`${styles.button} ${styles[direction]} ${className ?? ''}`}
    {...props}
  >
    {children}
  </button>
)
