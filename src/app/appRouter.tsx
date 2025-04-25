import { createBrowserRouter } from 'react-router'

import { BaseLayout } from './layouts/BaseLayout'

import { Main } from '@/pages/questions'
import { QuestionPage } from '@/pages/question'
import { RouterErrorBoundary } from '@/shared/ui'

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <RouterErrorBoundary />,
    children: [
      {
        path: '/',
        element: <Main />,
        errorElement: <RouterErrorBoundary />
      },
      {
        path: '/questions',
        element: <Main />,
        errorElement: <RouterErrorBoundary />
      },
      {
        path: '/questions/:id',
        element: <QuestionPage />,
        errorElement: <RouterErrorBoundary />
      },
      {
        path: '*',
        element: <div>404</div>
      }
    ]
  }
])
