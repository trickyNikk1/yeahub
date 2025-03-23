import { useState } from 'react'

import styles from './styles.module.css'

import { Skeleton } from '@/shared/ui'
import {
  QuestionAccordion,
  useGetPublicQuestionsQuery
} from '@/entities/question'
import { Pagination } from '@/shared/ui'

export const Main = () => {
  const [page, setPage] = useState(1)
  const { isLoading, data } = useGetPublicQuestionsQuery({
    page: page,
    limit: 10
  })
  return (
    <Skeleton isLoading={isLoading} type="questionsList" count={10}>
      <main className={styles.main}>
        {data ? (
          <section className={styles.container}>
            <h1 className={styles.title}>Вопросы</h1>
            <ul className={styles.list}>
              {data.data.map(question => {
                return (
                  <li key={question.id} className={styles.item}>
                    <QuestionAccordion questionData={question} />
                  </li>
                )
              })}
            </ul>

            <Pagination
              total={data && Math.ceil(data.total / data.limit)}
              current={data?.page}
              handler={page => {
                setPage(page)
              }}
            />
          </section>
        ) : null}
      </main>
    </Skeleton>
  )
}
