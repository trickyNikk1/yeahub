import styles from './styles.module.css'

import { useAppDispatch, useAppSelector } from '@/shared/lib'
import {
  Skeleton,
  SkeletonOptions,
  SkeletonTags,
  AdaptiveSidePanel,
  Card
} from '@/shared/ui'
import { setIsInfoOpen } from '@/entities/question/model/slice'

export const SkeletonQuestionFullInfo = () => {
  const dispatch = useAppDispatch()
  const isInfoOpen = useAppSelector(state => state.question.isInfoOpen)

  const mainInfoEl = (
    <>
      <Skeleton className={styles.title} />
      <div className={styles.labels}>
        <Skeleton className={styles.label} />
        <Skeleton className={styles.label} />
      </div>
      <SkeletonOptions count={3} type="reverse" />
      <SkeletonTags count={3} />
    </>
  )

  return (
    <AdaptiveSidePanel
      renderDesktop={() => (
        <section className={styles.container}>
          <Card className={styles.card}>{mainInfoEl}</Card>
          <Skeleton className={styles.author} />
        </section>
      )}
      isOpen={isInfoOpen}
      setIsOpen={() => dispatch(setIsInfoOpen(false))}
    >
      <section className={styles.card}>
        {mainInfoEl}
        <Skeleton className={styles.author} />
      </section>
    </AdaptiveSidePanel>
  )
}
