import { setIsInfoOpen } from '../../model/slice'

import styles from './styles.module.css'

import { ButtonFilters, Card } from '@/shared/ui'
import { useAppDispatch } from '@/shared/lib'

interface Props {
  imageSrc?: string | null
  title?: string
  description?: string
}

export const QuestionFullHeader = ({ imageSrc, title, description }: Props) => {
  const dispatch = useAppDispatch()

  return (
    <Card className={styles.header}>
      {imageSrc ? (
        <img className={styles.image} src={imageSrc} alt="" />
      ) : (
        <div className={styles.placeholder}></div>
      )}
      <div className={styles.inner}>
        <div className={styles.top}>
          <h1 className={styles.title}>{title}</h1>
          <ButtonFilters
            className={styles.button}
            icon="diploma"
            onClick={() => dispatch(setIsInfoOpen(true))}
          />
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </Card>
  )
}
