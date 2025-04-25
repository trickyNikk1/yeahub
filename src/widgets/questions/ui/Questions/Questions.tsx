import { useSearchParams } from 'react-router'

import { SkeletonQuestions } from '../SkeletonQuestions/SkeletonQuestions'
import { useFilters } from '../../model/hooks/useFilters'
import { usePagination } from '../../model/hooks/usePagination'

import styles from './styles.module.css'

import {
  QuestionAccordion,
  useGetPublicQuestionsQuery
} from '@/entities/question'
import { SetContent, useAppDispatch, useDebounce } from '@/shared/lib'
import { ButtonFilters, Card, Pagination } from '@/shared/ui'
import { setIsOpen } from '@/features/filters'

export const Questions = () => {
  const dispatch = useAppDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const { specializationTitle, ...filters } = useFilters(
    searchParams,
    setSearchParams
  )
  const { page, setPage } = usePagination(searchParams, setSearchParams)

  const debouncedFilters = useDebounce(filters, 500)

  const { isLoading, isFetching, error, data } = useGetPublicQuestionsQuery({
    page,
    ...(debouncedFilters.titleOrDescriptionSearch !== ''
      ? { titleOrDescription: debouncedFilters.titleOrDescriptionSearch }
      : {}),
    ...(debouncedFilters.specializationId !== -1
      ? { specialization: debouncedFilters.specializationId }
      : {}),
    ...(debouncedFilters.skillsIds.length
      ? { skills: debouncedFilters.skillsIds }
      : {}),
    ...(debouncedFilters.complexity.length
      ? { complexity: debouncedFilters.complexity }
      : {}),
    ...(debouncedFilters.rate.length ? { rate: debouncedFilters.rate } : {}),
    limit: 10
  })

  return (
    <SetContent
      isLoading={isLoading}
      isFetching={isFetching}
      error={error}
      skeleton={<SkeletonQuestions />}
      data={data?.data}
    >
      {data ? (
        <Card>
          <section className={styles.container}>
            <div className={styles.header}>
              <h1 className={styles.title}>Вопросы {specializationTitle}</h1>
              <ButtonFilters
                className={styles['filters-button']}
                onClick={() => dispatch(setIsOpen(true))}
              />
            </div>
            <ul className={styles.list}>
              {data.data.map(question => (
                <li key={question.id} className={styles.item}>
                  <QuestionAccordion questionData={question} />
                </li>
              ))}
            </ul>
            <Pagination
              total={data && Math.ceil(data.total / data.limit)}
              current={data && data.page}
              handler={newPage => setPage(newPage)}
            />
          </section>
        </Card>
      ) : null}
    </SetContent>
  )
}
