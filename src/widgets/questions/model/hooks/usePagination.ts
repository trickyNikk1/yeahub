import { useEffect, useRef } from 'react'

import { setCurrentPage } from '../../model/questionsPageSlice'

import { useAppDispatch, useAppSelector } from '@/shared/lib'

export const usePagination = (
  searchParams: URLSearchParams,
  setSearchParams: React.Dispatch<React.SetStateAction<URLSearchParams>>
) => {
  const isFirstRender = useRef(true)
  const dispatch = useAppDispatch()

  const paramPage = Number(searchParams.get('page')) || 1
  const currentPage = useAppSelector(state => state.questionsPage.current)

  const titleOrDescription = searchParams.get('titleOrDescription') || ''
  const specialization = searchParams.get('specialization') || ''
  const skillsIds = searchParams.get('skillsIds') || ''
  const complexity = searchParams.get('complexity') || ''
  const rate = searchParams.get('rate') || ''
  const specializationTitle = searchParams.get('specializationTitle') || ''

  const filters = {
    titleOrDescription,
    specialization,
    skillsIds,
    complexity,
    rate,
    specializationTitle
  }

  // Используем JSON.stringify для создания уникального хеша фильтров
  const filtersHash = JSON.stringify(filters)

  const setPage = (page: number) => {
    dispatch(setCurrentPage(page))

    setSearchParams(prev => {
      const params = new URLSearchParams(prev)
      params.set('page', page.toString())
      return params
    })
  }

  // Инициализация страницы из searchParams
  useEffect(() => {
    dispatch(setCurrentPage(paramPage))
  }, [])

  // Сброс страницы при изменении фильтров
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    setPage(1)
  }, [filtersHash])

  return { page: currentPage, setPage }
}
