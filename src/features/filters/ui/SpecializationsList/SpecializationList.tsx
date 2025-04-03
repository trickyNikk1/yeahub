import { useState } from 'react'

import { setSpecializationId, setSpecializationTitle } from '../../model/slice'

import { Button, OptionsList, Skeleton } from '@/shared/ui'
import { useAppDispatch, useAppSelector } from '@/shared/lib'
import { useGetSpecializationsQuery } from '@/entities/specialization'
import { Specialization } from '@/entities/specialization'

export const SpecializationsList = () => {
  const dispatch = useAppDispatch()

  const [limit, setLimit] = useState(20)
  const { data, isLoading } = useGetSpecializationsQuery({ limit })
  const specializationId = useAppSelector(
    state => state.filters.specializationId
  )

  const options = Array.isArray(data?.data) ? data.data : []

  const handleSelectSpecialization = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const id = Number(event.currentTarget.dataset.id)
    const title = event.currentTarget.textContent
    dispatch(setSpecializationId(id))
    dispatch(setSpecializationTitle(title))
  }

  return (
    <Skeleton isLoading={isLoading} type="options">
      <OptionsList<Specialization>
        onOpen={() => {
          setLimit(data?.total || 20)
        }}
        title={'Специализация'}
        options={options}
        renderOption={option => (
          <Button
            data-id={option.id}
            style="option"
            isActive={option.id === specializationId}
            onClick={handleSelectSpecialization}
          >
            {option.title}
          </Button>
        )}
      />
    </Skeleton>
  )
}
