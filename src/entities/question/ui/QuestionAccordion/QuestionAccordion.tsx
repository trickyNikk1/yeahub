import { useState } from 'react'

import { IQuestion } from '../../model/types'
import { QuestionLabels } from '../QuestionLabels/QuestionLabels'
import { Answer } from '../Answer/Answer'

import styles from './styles.module.css'

import { AccordionButton, LinkMore } from '@/shared/ui'

interface Props {
  questionData: IQuestion
}

export const QuestionAccordion = ({ questionData: question }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const clickHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <article className={styles.container}>
      <AccordionButton
        title={question.title}
        clickHandler={clickHandler}
        isOpen={isOpen}
      />
      <div className={isOpen ? styles.body : styles['hidden-body']}>
        <QuestionLabels
          className={styles.labels}
          labels={[
            { name: 'Рейтинг', value: question?.rate ?? 0 },
            { name: 'Сложность', value: question?.complexity ?? 0 }
          ]}
        />
        {question.imageSrc && (
          <img src={question.imageSrc} alt="Question image" />
        )}
        <Answer className={styles.answer} answerData={question.shortAnswer} />
        <LinkMore to={`${question.id}`}>Подробнее</LinkMore>
      </div>
    </article>
  )
}
