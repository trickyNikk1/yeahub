import DOMPurify from 'dompurify'
import { HtmlHTMLAttributes, useState } from 'react'

import styles from './styles.module.css'

import { ButtonMore, Card } from '@/shared/ui'

interface Props {
  answerData: string
  title?: string
  isCard?: boolean
  isLong?: boolean
}

export const Answer = ({
  title,
  answerData,
  className,
  isCard = false,
  isLong = false
}: Props & HtmlHTMLAttributes<HTMLDivElement>) => {
  const [isOpen, setIsOpen] = useState(false)
  const cleanAnswerHtml = {
    __html: `${DOMPurify.sanitize(answerData)}`
  }

  if (isCard) {
    return (
      <Card>
        {title && <h2 className={styles.title}>{title}</h2>}

        <div
          className={`${styles.answer} ${isLong ? styles.long : ''} ${isOpen ? styles.open : ''} ${className ?? ''}`}
          dangerouslySetInnerHTML={cleanAnswerHtml}
        ></div>
        {isLong && (
          <ButtonMore
            textBefore="Развернуть"
            textAfter="Свернуть"
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
      </Card>
    )
  }

  return (
    <>
      {title ?? <h2 className={styles.title}>{title}</h2>}

      <div
        className={`${styles.answer} ${className ?? ''}`}
        dangerouslySetInnerHTML={cleanAnswerHtml}
      ></div>
    </>
  )
}
