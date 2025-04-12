import { Skeleton } from '../Skeleton/Skeleton'

import styles from './styles.module.css'

interface Props {
  count?: number
}

export const SkeletonTags = ({ count = 3 }: Props) => {
  return (
    <div className={styles.container}>
      <Skeleton className={styles.title}></Skeleton>
      <div className={styles.tags}>
        {[...Array(count)].map((_, index) => {
          return <Skeleton key={index} className={styles.line}></Skeleton>
        })}
      </div>
    </div>
  )
}
