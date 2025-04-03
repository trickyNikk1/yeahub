import { useState } from 'react'

import { setSkillsIds } from '../../model/slice'

import { Button, OptionsList, Skeleton } from '@/shared/ui'
import { useAppDispatch, useAppSelector } from '@/shared/lib'
import { Skill, useGetSkillsQuery } from '@/entities/skill'

export const SkillsList = () => {
  const dispatch = useAppDispatch()
  const [limit, setLimit] = useState(20)

  const skillsIds = useAppSelector(state => state.filters.skillsIds)
  const specializationId = useAppSelector(
    state => state.filters.specializationId
  )

  const { data, isLoading } = useGetSkillsQuery({
    limit,
    ...(specializationId !== -1 ? { specializations: [specializationId] } : {})
  })

  const options = Array.isArray(data?.data) ? data.data : []

  const handleSelectSkill = (event: React.MouseEvent<HTMLButtonElement>) => {
    const id = Number(event.currentTarget.dataset.id)
    dispatch(setSkillsIds(id))
  }

  return (
    <Skeleton isLoading={isLoading} type="optionsReverse">
      <OptionsList<Skill>
        onOpen={() => {
          setLimit(data?.total || 20)
        }}
        title={'Навыки'}
        options={options}
        renderOption={option => (
          <Button
            data-id={option.id}
            style="option"
            isActive={skillsIds.includes(option.id)}
            onClick={handleSelectSkill}
          >
            {option.imageSrc ? (
              <img
                src={option.imageSrc}
                alt=""
                width={20}
                height={20}
                style={{ objectFit: 'contain' }}
              />
            ) : null}

            {option.title}
          </Button>
        )}
      />
    </Skeleton>
  )
}
