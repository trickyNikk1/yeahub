import styles from './styles.module.css'

interface Props {
  rate: number
  complexity: number
}

export const QuestionLabels = ({ rate, complexity }: Props) => {
  return (
    <div className={styles.labels}>
      <span className={styles.label}>
        Рeйтинг: <span className={styles.number}>{rate}</span>
      </span>
      <span className={styles.label}>
        Сложность: <span className={styles.number}>{complexity}</span>
      </span>
    </div>
  )
}
