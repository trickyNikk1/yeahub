import { SkeletonOptions } from '../SkeletonOptions/SkeletonOptions'
import { SkeletonQuestions } from '../SkeletonQuestions/SkeletonQuestions'

import { SkeletonType } from '@/shared/model/types'

interface Props {
  children: React.ReactNode
  type?: SkeletonType
  count?: number
  isLoading: boolean
}

export const Skeleton = ({
  children,
  type = 'questionsList',
  isLoading
}: Props) => {
  if (!isLoading) return children

  switch (type) {
    case 'questionsList':
      return <SkeletonQuestions count={7} />
    case 'options':
      return <SkeletonOptions count={5} />
    case 'optionsReverse':
      return <SkeletonOptions count={5} type="reverse" />
    default:
      break
  }
}
