import { setTitleOrDescriptionSearch } from '../../model/slice'

import { useAppDispatch, useAppSelector } from '@/shared/lib'
import { SearchInput } from '@/shared/ui'

export const QuestionSearch = () => {
  const dispatch = useAppDispatch()
  const titleOrDescriptionSearch = useAppSelector(
    state => state.filters.titleOrDescriptionSearch
  )

  return (
    <SearchInput
      value={titleOrDescriptionSearch}
      setValue={value => {
        dispatch(setTitleOrDescriptionSearch(value.toString()))
      }}
    />
  )
}
