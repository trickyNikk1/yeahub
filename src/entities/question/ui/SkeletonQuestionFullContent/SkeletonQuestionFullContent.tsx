import styles from './styles.module.css'

import { Card, Skeleton, SkeletonText } from '@/shared/ui'

export const SkeletonQuestionFullContent = () => {
  return (
    <div className={styles.container}>
      <Card className={styles.header}>
        <Skeleton className={styles['header-image']} />
        <div className={styles['header-inner']}>
          <div className={styles['header-top']}>
            <Skeleton className={styles['header-title']} />
            <Skeleton className={styles['header-button']} />
          </div>
          <SkeletonText count={3} />
        </div>
      </Card>{' '}
      <div className={styles.body}>
        <Card className={styles.info}>
          <Skeleton className={styles.title} />
          <SkeletonText count={7} />
        </Card>
        <Card className={styles.info}>
          <Skeleton className={styles.title} />
          <SkeletonText count={7} />
          <Skeleton className={styles.button} />
        </Card>
      </div>
    </div>
  )
}
