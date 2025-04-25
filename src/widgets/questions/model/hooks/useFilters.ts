import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@/shared/lib'
import { setFilters } from '@/features/filters'

export const useFilters = (
  searchParams: URLSearchParams,
  setSearchParams: React.Dispatch<React.SetStateAction<URLSearchParams>>
) => {
  const dispatch = useAppDispatch()
  const filters = useAppSelector(state => state.filters)

  // Инициализация фильтров из searchParams
  useEffect(() => {
    const titleOrDescription = searchParams.get('titleOrDescription') || ''
    const specialization = Number(searchParams.get('specialization')) || 11
    const specializationTitle =
      searchParams.get('specializationTitle') || 'React Frontend Developer'
    const skillsIds =
      searchParams.get('skillsIds')?.split(',').map(Number) || []
    const complexity =
      searchParams
        .get('complexity')
        ?.split(',')
        .map(Number)
        .filter(n => !isNaN(n)) || []
    const rate =
      searchParams
        .get('rate')
        ?.split(',')
        .map(Number)
        .filter(n => !isNaN(n)) || []

    dispatch(
      setFilters({
        titleOrDescriptionSearch: titleOrDescription,
        specializationId: specialization,
        skillsIds,
        complexity,
        rate,
        specializationTitle
      })
    )
  }, [searchParams, dispatch])

  const filtersHash = JSON.stringify(filters)

  // Обновление searchParams при изменении фильтров
  useEffect(() => {
    setSearchParams(prev => {
      const params = new URLSearchParams(prev)
      if (filters.titleOrDescriptionSearch === '')
        params.delete('titleOrDescription')
      else params.set('titleOrDescription', filters.titleOrDescriptionSearch)
      if (filters.specializationId === -1) params.delete('specialization')
      else params.set('specialization', String(filters.specializationId))
      if (filters.skillsIds.length === 0) params.delete('skillsIds')
      else params.set('skillsIds', filters.skillsIds.join(','))
      if (filters.complexity.length === 0) params.delete('complexity')
      else params.set('complexity', filters.complexity.join(','))
      if (filters.rate.length === 0) params.delete('rate')
      else params.set('rate', filters.rate.join(','))
      if (filters.specializationTitle === '')
        params.delete('specializationTitle')
      else params.set('specializationTitle', filters.specializationTitle)
      return params
    })
  }, [filtersHash, setSearchParams])

  return filters
}
