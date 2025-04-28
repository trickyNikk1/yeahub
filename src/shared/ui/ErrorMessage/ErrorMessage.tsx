import styles from './styles.module.css'

interface Props {
  message: string
  title?: string
  variant?: 'error' | 'warning' | 'info'
}

export const ErrorMessage = ({
  message,
  variant = 'error',
  title = 'Упс! Что-то пошло не так...'
}: Props) => {
  return (
    <div className="wrapper">
      <div className={`${styles.container} ${styles[variant]}`}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{message}</p>
      </div>
    </div>
  )
}
