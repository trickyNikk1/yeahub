import { useState } from 'react'

import styles from './styles.module.css'

interface Props<T extends { id?: string | number }> {
  title: string
  options: T[]
  limit?: number
  renderOption?: (option: T, index?: number) => React.ReactNode
  onOpen?: () => void
  onClose?: () => void
}

export const OptionsList = <T extends { id?: string | number }>({
  title,
  options = [],
  limit = 5,
  renderOption,
  onOpen = () => {},
  onClose = () => {}
}: Props<T>) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
    onOpen()
  }

  const handleClose = () => {
    setIsOpen(false)
    onClose()
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {options
          .slice(0, isOpen ? options.length : limit)
          .map((option, index) => (
            <li key={option?.id || index}>
              {(renderOption && renderOption(option, index)) || null}
            </li>
          ))}
      </ul>
      {options.length > limit && !isOpen && (
        <button className={styles.button} type="button" onClick={handleOpen}>
          Посмотреть все
        </button>
      )}
      {options.length > limit && isOpen && (
        <button className={styles.button} type="button" onClick={handleClose}>
          Скрыть
        </button>
      )}
    </div>
  )
}
