import { Skeleton } from '../Skeleton/Skeleton'

import styles from './styles.module.css'

interface Props {
  count?: number
  type?: 'normal' | 'reverse'
}

export const SkeletonOptions = ({ count = 5, type = 'normal' }: Props) => {
  return (
    <div className={styles.options}>
      <Skeleton className={styles.title}></Skeleton>
      <div className={styles.list}>
        {[...Array(count)].map((_, index) => {
          return (
            <Skeleton
              key={index}
              className={`${styles.option} ${index % 2 && type === 'reverse' ? styles['option-lg'] : styles['option-xl']}`}
            ></Skeleton>
          )
        })}
      </div>
      <Skeleton className={styles.button}></Skeleton>
    </div>
  )
}
