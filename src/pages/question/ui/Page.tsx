import { useNavigate } from 'react-router'

import styles from './styles.module.css'

import { QuestionFull } from '@/entities/question'
import { ButtonCaret } from '@/shared/ui'

export const QuestionPage = () => {
  const navigate = useNavigate()

  return (
    <div className="wrapper">
      <div className={styles.container}>
        <ButtonCaret direction="left" onClick={() => navigate(-1)}>
          Назад
        </ButtonCaret>
        <main className={styles.main}>
          <QuestionFull />
        </main>
      </div>
    </div>
  )
}
