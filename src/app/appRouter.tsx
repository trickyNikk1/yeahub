import { createBrowserRouter, Navigate } from 'react-router'
import { lazy, Suspense } from 'react'

import { Loader, RouterErrorBoundary } from '@/shared/ui'

const BaseLayout = lazy(() => import('./layouts/BaseLayout'))
const QuestionsPage = lazy(() => import('@/pages/questions'))
const QuestionPage = lazy(() => import('@/pages/question'))
const NotFoundPage = lazy(() => import('@/pages/NotFound'))

export const appRouter = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<Loader />}>
        <BaseLayout />
      </Suspense>
    ),
    errorElement: <RouterErrorBoundary />,
    children: [
      {
        path: '/',
        element: <Navigate to="questions" replace />,
        errorElement: <RouterErrorBoundary />
      },
      {
        path: '/questions',
        element: (
          <Suspense fallback={<Loader />}>
            <QuestionsPage />,
          </Suspense>
        ),
        errorElement: <RouterErrorBoundary />
      },
      {
        path: '/questions/:id',
        element: (
          <Suspense fallback={<Loader />}>
            <QuestionPage />,
          </Suspense>
        ),
        errorElement: <RouterErrorBoundary />
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<Loader />}>
            <NotFoundPage />
          </Suspense>
        )
      }
    ]
  }
])
