import { Skeleton } from '../Skeleton/Skeleton'

import styles from './styles.module.css'

interface Props {
  count?: number
}

export const SkeletonText = ({ count = 5 }: Props) => {
  return (
    <div className={styles.text}>
      {[...Array(count)].map((_, index) => {
        return <Skeleton key={index} className={styles.line}></Skeleton>
      })}
    </div>
  )
}
