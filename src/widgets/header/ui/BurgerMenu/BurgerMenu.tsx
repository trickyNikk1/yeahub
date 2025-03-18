import { useRef, useState } from 'react'

import styles from './styles.module.css'

import { useOnClickOutside } from '@/shared/hooks/useOnClickOutside'

interface Props {
  items: React.ReactNode[]
}

export const BurgerMenu = ({
  items = [],
  className = '',
  ...otherProps
}: Props & React.HTMLAttributes<HTMLDivElement>) => {
  const [isOpen, setIsOpen] = useState(false)

  const ref = useRef<HTMLButtonElement | null>(null)

  const clickHandler = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  useOnClickOutside(ref, closeMenu)

  return (
    <div className={styles.container + ' ' + className} {...otherProps}>
      <button
        type="button"
        className={`${styles.button} ${isOpen ? styles['close'] : ''}`}
        onClick={clickHandler}
        ref={ref}
      >
        <div className={`${styles.line} ${styles.line1}`}></div>
        <div className={`${styles.line} ${styles.line2}`}></div>
        <div className={`${styles.line} ${styles.line3}`}></div>
      </button>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index} className={styles.item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
