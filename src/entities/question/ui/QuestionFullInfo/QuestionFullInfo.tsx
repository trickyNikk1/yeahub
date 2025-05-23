import { Link } from 'react-router'

import { IQuestion } from '../../model/types'
import { setIsInfoOpen } from '../../model/slice'
import { QuestionLabels } from '../QuestionLabels/QuestionLabels'
import { InfoList } from '../InfoList/InfoList'

import styles from './styles.module.css'

import { AdaptiveSidePanel, Button, Card, SkeletonGroup } from '@/shared/ui'
import { useAppDispatch, useAppSelector } from '@/shared/lib'
import { SkeletonQuestionFullInfo } from '@/entities/question/ui/SkeletonQuestionFullInfo/SkeletonQuestionFullInfo'

interface Props {
  data?: IQuestion | null
  isLoading: boolean
}

export const QuestionFullInfo = ({ data, isLoading }: Props) => {
  const dispatch = useAppDispatch()
  const isInfoOpen = useAppSelector(state => state.question.isInfoOpen)

  const mainInfoEl = (
    <>
      <QuestionLabels
        title="Уровень:"
        labels={[
          { name: 'Рейтинг', value: data?.rate ?? 0 },
          { name: 'Сложность', value: data?.complexity ?? 0 }
        ]}
      />
      <InfoList
        title="Навыки:"
        items={data?.questionSkills ?? []}
        renderItem={item => (
          <Button variant="option" isActive={true}>
            {item.imageSrc ? (
              <img
                src={item.imageSrc}
                alt=""
                width={20}
                height={20}
                style={{ objectFit: 'contain' }}
                loading="lazy"
              />
            ) : null}

            {item.title}
          </Button>
        )}
      />
      <InfoList
        title="Ключевые слова:"
        items={data?.keywords ?? []}
        renderItem={item => (
          <Link to={''} className={styles.keyword}>
            #{item}
          </Link>
        )}
      />
    </>
  )

  const authorEl = data?.createdBy && (
    <span className={styles.author}>
      Автор:{' '}
      <Link to={''} className={styles.name}>
        {data?.createdBy.username ?? ''}
      </Link>
    </span>
  )

  return (
    <SkeletonGroup
      isLoading={isLoading}
      skeleton={<SkeletonQuestionFullInfo />}
    >
      <AdaptiveSidePanel
        renderDesktop={() => (
          <section className={styles.container}>
            <Card className={styles.card}>{mainInfoEl}</Card>
            {authorEl}
          </section>
        )}
        isOpen={isInfoOpen}
        setIsOpen={() => dispatch(setIsInfoOpen(false))}
      >
        <section className={styles.card}>
          {mainInfoEl}
          {authorEl}
        </section>
      </AdaptiveSidePanel>
    </SkeletonGroup>
  )
}
