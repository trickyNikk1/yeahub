interface Props {
  children: React.ReactNode
  skeleton: React.ReactNode
  isLoading: boolean
}

export const SkeletonGroup = ({ children, skeleton, isLoading }: Props) => {
  if (!isLoading) return children

  return skeleton
}
