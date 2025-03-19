import styles from './styles.module.css'

import { SkeletonType } from '@/shared/model/types'

interface Props {
  children: React.ReactNode
  type?: SkeletonType
  count?: number
  isLoading: boolean
}

export const Skeleton = ({ children, type = 'questionsList', count = 10, isLoading }: Props) => {
  if (!isLoading) return children

  switch (type) {
    case 'questionsList':
      return (
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles['main-title']}></div>
            <div className={styles['filter-button']}></div>
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
        </div>
      )

    default:
      break
  }
}
