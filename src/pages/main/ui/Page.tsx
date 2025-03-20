import { Skeleton } from '@/shared/ui'
import styles from './styles.module.css'

import { QuestionAccordion, useGetPublicQuestionsQuery } from '@/entities/question'

export const Main = () => {
  const { isLoading, data } = useGetPublicQuestionsQuery()
  return (
    <Skeleton isLoading={isLoading} type="questionsList" count={10}>
      <main className={styles.main}>
        <section className={styles.container}>
          <h1 className={styles.title}>Вопросы</h1>
          <ul className={styles.list}>
            {data
              ? data.data.map((question) => {
                  return (
                    <li key={question.id} className={styles.item}>
                      <QuestionAccordion questionData={question} />
                    </li>
                  )
                })
              : null}
          </ul>
        </section>
      </main>
    </Skeleton>
  )
}
