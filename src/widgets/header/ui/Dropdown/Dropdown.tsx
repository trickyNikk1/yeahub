import React from 'react'

import styles from './styles.module.css'

interface Props {
  items: React.ReactNode[]
}
export const Dropdown = ({
  title = '',
  items = [],
  className = '',
  ...otherProps
}: Props & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`${styles.dropdown} ${className}`} {...otherProps}>
      <button type="button" className={styles.button}>
        <span className={styles.label}>{title}</span>
        <span className={styles.arrow}></span>
      </button>
      <ul className={styles.list}>
        {items.map((item, index) => {
          return (
            <li key={index} className={styles.item}>
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
