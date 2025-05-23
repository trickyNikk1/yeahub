import { useRouteError } from 'react-router'

import { ErrorMessage } from '../ErrorMessage/ErrorMessage'

export const RouterErrorBoundary = () => {
  const error = useRouteError()
  console.error(error)
  return (
    <ErrorMessage
      message={error instanceof Error ? error.message : 'Unknown error'}
    />
  )
}
