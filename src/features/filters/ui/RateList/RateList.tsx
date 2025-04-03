import { setRate } from '../../model/slice'

import { Button, OptionsList } from '@/shared/ui'
import { useAppDispatch, useAppSelector } from '@/shared/lib'

interface RateOption {
  id: number
  title: string
}

const options = [
  { id: 1, title: '1' },
  { id: 2, title: '2' },
  { id: 3, title: '3' },
  { id: 4, title: '4' },
  { id: 5, title: '5' }
]

export const RateList = () => {
  const dispatch = useAppDispatch()

  const currentRate = useAppSelector(state => state.filters.rate)

  const handleSelectRate = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rate = Number(event.currentTarget.textContent)
    dispatch(setRate(rate))
  }

  return (
    <OptionsList<RateOption>
      title={'Рейтинг'}
      options={options}
      renderOption={option => (
        <Button
          style="option"
          isActive={currentRate.includes(Number(option.title))}
          onClick={handleSelectRate}
        >
          {option.title}
        </Button>
      )}
    />
  )
}
