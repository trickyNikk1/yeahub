import { useEffect, useMemo } from 'react'

import { setCurrentPage } from '../../model/questionsPageSlice'
import { SkeletonQuestions } from '../SkeletonQuestions/SkeletonQuestions'

import styles from './styles.module.css'

import {
  QuestionAccordion,
  useGetPublicQuestionsQuery
} from '@/entities/question'
import { useAppDispatch, useAppSelector, useDebounce } from '@/shared/lib'
import { ButtonFilters, Card, Pagination, SkeletonGroup } from '@/shared/ui'
import { setIsOpen } from '@/features/filters'

export const Questions = () => {
  const dispatch = useAppDispatch()

  const page = useAppSelector(state => state.questionsPage.current)
  const filters = useAppSelector(state => state.filters)

  const memoizedFilters = useMemo(
    () => ({
      titleOrDescription: filters.titleOrDescriptionSearch,
      specialization: filters.specializationId,
      skillsIds: filters.skillsIds,
      complexity: filters.complexity,
      rate: filters.rate
    }),
    [
      filters.titleOrDescriptionSearch,
      filters.specializationId,
      filters.skillsIds,
      filters.complexity,
      filters.rate
    ]
  )

  useEffect(() => {
    dispatch(setCurrentPage(1))
  }, [memoizedFilters, dispatch])

  const debouncedFilters = useDebounce(memoizedFilters, 500)

  const { isLoading, data } = useGetPublicQuestionsQuery({
    page,
    ...(debouncedFilters.titleOrDescription !== ''
      ? { titleOrDescription: debouncedFilters.titleOrDescription }
      : {}),
    ...(debouncedFilters.specialization !== -1
      ? { specialization: debouncedFilters.specialization }
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

  const setPage = (page: number) => dispatch(setCurrentPage(page))

  return (
    <SkeletonGroup isLoading={isLoading} skeleton={<SkeletonQuestions />}>
      {data ? (
        <Card>
          <section className={styles.container}>
            <div className={styles.header}>
              <h1 className={styles.title}>
                Вопросы {filters.specializationTitle}
              </h1>
              <ButtonFilters
                className={styles['filters-button']}
                onClick={() => dispatch(setIsOpen(true))}
              />
            </div>
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
        </Card>
      ) : null}
    </SkeletonGroup>
  )
}
