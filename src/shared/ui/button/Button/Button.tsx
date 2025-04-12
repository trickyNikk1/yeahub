import React from 'react'

import styles from './styles.module.css'

interface Props {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'option' | 'link'
  isActive?: boolean
}

export const Button = ({
  className,
  isActive = false,
  children,
  variant = 'primary',
  ...otherProps
}: Props & React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${isActive ? styles.active : ''} ${className ?? ''}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}
