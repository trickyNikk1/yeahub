import { setComplexity } from '../../model/slice'

import { Button, OptionsList } from '@/shared/ui'
import { useAppDispatch, useAppSelector } from '@/shared/lib'

interface ComplexityOption {
  id: string | number
  title: string
}

const complexityFormatter = (title: string | null) => {
  if (!title) return []

  const [start, end] = title.split('-')
  const complexityArray: number[] = []

  for (let i = Number(start); i <= Number(end); i++) {
    complexityArray.push(i)
  }

  return complexityArray
}

const options = [
  { id: 1, title: '1-3' },
  { id: 2, title: '4-6' },
  { id: 3, title: '7-8' },
  { id: 4, title: '9-10' }
]

export const ComplexityList = () => {
  const dispatch = useAppDispatch()

  const currentComplexity = useAppSelector(state => state.filters.complexity)

  const handleSelectComplexity = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const complexity = complexityFormatter(event.currentTarget.textContent)
    dispatch(setComplexity(complexity))
  }

  return (
    <OptionsList<ComplexityOption>
      title={'Уровень сложности'}
      options={options}
      renderOption={option => (
        <Button
          variant="option"
          isActive={currentComplexity.includes(Number(option.title[0]))}
          onClick={handleSelectComplexity}
        >
          {option.title}
        </Button>
      )}
    />
  )
}
