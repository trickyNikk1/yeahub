import React from 'react'

import styles from './styles.module.css'

interface Props {
  children: React.ReactNode
  style?: 'primary' | 'secondary' | 'option'
  isActive?: boolean
}

export const Button = ({
  className,
  isActive = false,
  children,
  style = 'primary',
  ...otherProps
}: Props & React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`${styles.button} ${styles[style]} ${isActive ? styles.active : ''} ${className ?? ''}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}
