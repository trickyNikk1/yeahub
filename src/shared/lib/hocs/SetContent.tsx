import { JSX } from 'react'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { SerializedError } from '@reduxjs/toolkit'

import { ErrorMessage, Loader } from '@/shared/ui'

interface Props<T> {
  isLoading: boolean
  isFetching: boolean
  skeleton: JSX.Element
  children: JSX.Element | null
  error?: null | FetchBaseQueryError | SerializedError | Error
  data?: T[]
}

export const SetContent = <T,>({
  isLoading,
  isFetching,
  children,
  error,
  skeleton,
  data
}: Props<T>) => {
  if (isLoading) return skeleton
  if (isFetching)
    return (
      <div style={{ position: 'relative' }}>
        <Loader />
        <div className="blur">{children}</div>
      </div>
    )
  if (!isLoading && !isFetching && data && data.length === 0)
    return (
      <div>
        {children}
        <ErrorMessage
          variant="info"
          title="Ничего не нашлось."
          message="Попробуйте выбрать другие фильтры"
        />
      </div>
    )
  if (error && 'name' in error && 'message' in error)
    return <ErrorMessage message={`${error.message}`} />
  if (error && 'message' in error)
    return <ErrorMessage message={`${error.name}`} />
  if (error && 'status' in error)
    return <ErrorMessage message={`Ошибка ${error.status}`} />
  return children
}
