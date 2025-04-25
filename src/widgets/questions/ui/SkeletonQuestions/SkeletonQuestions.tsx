import styles from './styles.module.css'

import { Skeleton } from '@/shared/ui'

export const SkeletonQuestions = ({ count = 7 }: { count?: number }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Skeleton className={styles['main-title']}></Skeleton>
        <Skeleton className={styles['filters-button']}></Skeleton>
      </div>

      <div className={styles.questions}>
        {[...Array(count)].map((_, index) => {
          return (
            <div key={index} className={styles.question}>
              <Skeleton className={styles['question-title']}></Skeleton>
              <Skeleton className={styles['question-icon']}></Skeleton>
            </div>
          )
        })}
      </div>

      <div className={styles.pagination}>
        <Skeleton className={styles.prev}></Skeleton>
        {[...Array(count)].map((_, index) => {
          return <Skeleton key={index} className={styles.page}></Skeleton>
        })}
        <Skeleton className={styles.prev}></Skeleton>
      </div>
    </div>
  )
}
