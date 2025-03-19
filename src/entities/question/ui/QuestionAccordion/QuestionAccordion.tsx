import DOMPurify from 'dompurify'
import { useState } from 'react'

import { IQuestion } from '../../model/types'
import { AccordionButton } from '../AccordionButton/AccordionButton'
import { QuestionLabels } from '../QuestionLabels/QuestionLabels'
import { LinkMore } from '../LinkMore/LinkMore'

import styles from './styles.module.css'

interface Props {
  questionData: IQuestion
}

export const QuestionAccordion = ({ questionData: question }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const cleanAnswerHtml = {
    __html: `${DOMPurify.sanitize(question.shortAnswer)}`
  }

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
        <QuestionLabels rate={question.rate} complexity={question.complexity} />
        {question.imageSrc && (
          <img src={question.imageSrc} alt="Question image" />
        )}
        <div
          className={styles.answer}
          dangerouslySetInnerHTML={cleanAnswerHtml}
        ></div>
        <LinkMore to={`questions/${question.id}`}>Подробнее</LinkMore>
      </div>
    </article>
  )
}
