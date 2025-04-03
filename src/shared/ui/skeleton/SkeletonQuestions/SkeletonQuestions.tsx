import styles from './styles.module.css'

export const SkeletonQuestions = ({ count = 7 }: { count?: number }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles['main-title']}></div>
        <div className={styles['filters-button']}></div>
      </div>

      <div className={styles.questions}>
        {[...Array(count)].map((_, index) => {
          return (
            <div key={index} className={styles.question}>
              <div className={styles['question-title']}></div>
              <div className={styles['question-icon']}></div>
            </div>
          )
        })}
      </div>

      <div className={styles.pagination}>
        <div className={styles.prev}></div>
        {[...Array(count)].map((_, index) => {
          return <div key={index} className={styles.page}></div>
        })}
        <div className={styles.prev}></div>
      </div>
    </div>
  )
}
