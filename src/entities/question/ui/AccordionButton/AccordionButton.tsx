import styles from './styles.module.css'

interface Props {
  title: string
  isOpen: boolean
  clickHandler: () => void
}

export const AccordionButton = ({ title, isOpen, clickHandler }: Props) => {
  return (
    <button
      className={isOpen ? styles.button : styles['button-open']}
      type="button"
      onClick={clickHandler}
    >
      <h2 className={styles.title}>
        <span className={styles.dot}></span>
        {title}
      </h2>
      <span className={styles.chevron}></span>
    </button>
  )
}
