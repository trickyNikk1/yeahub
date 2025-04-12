import styles from './styles.module.css'

type Label = {
  name: string
  value: string | number
}

interface Props {
  labels: Label[]
  title?: string
  className?: string
}

export const QuestionLabels = ({ labels, title, className = '' }: Props) => {
  return (
    <div className={styles.container}>
      {title ? <h3 className={styles.title}>{title}</h3> : null}
      <ul className={styles.list + ' ' + className}>
        {labels.map(label => (
          <li key={label.name} className={styles.item}>
            <span className={styles.label}>
              <span>{label.name}:</span>
              <span className={styles.number}>{label.value}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
