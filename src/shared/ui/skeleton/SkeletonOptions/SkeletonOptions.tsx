import styles from './styles.module.css'

interface Props {
  count?: number
  type?: 'normal' | 'reverse'
}

export const SkeletonOptions = ({ count = 5, type = 'normal' }: Props) => {
  return (
    <div className={styles.options}>
      <div className={styles.title}></div>
      <div className={styles.list}>
        {[...Array(count)].map((_, index) => {
          return (
            <div
              key={index}
              className={`${styles.option} ${index % 2 && type === 'reverse' ? styles['option-lg'] : styles['option-xl']}`}
            ></div>
          )
        })}
      </div>
      <div className={styles.button}></div>
    </div>
  )
}
