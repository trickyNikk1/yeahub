import { IQuestion } from '../../model/types'
import { Answer } from '../Answer/Answer'
import { QuestionFullHeader } from '../QuestionFullHeader/QuestionFullHeader'
import { SkeletonQuestionFullContent } from '../SkeletonQuestionFullContent/SkeletonQuestionFullContent'

import styles from './styles.module.css'

import { SkeletonGroup } from '@/shared/ui'

interface Props {
  data?: IQuestion
  isLoading: boolean
}

export const QuestionFullContent = ({ data, isLoading }: Props) => {
  return (
    <SkeletonGroup
      isLoading={isLoading}
      skeleton={<SkeletonQuestionFullContent />}
    >
      {data ? (
        <div className={styles.container}>
          <QuestionFullHeader
            imageSrc={data.imageSrc}
            title={data.title}
            description={data.description}
          />
          <div className={styles.body}>
            <Answer
              title="Краткий ответ"
              answerData={data.shortAnswer}
              isCard={true}
            />
            <Answer
              title="Развернутый ответ"
              answerData={data.longAnswer}
              isLong={true}
              isCard={true}
            />
          </div>
        </div>
      ) : null}
    </SkeletonGroup>
  )
}
