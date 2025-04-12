import { createBrowserRouter } from 'react-router'

import { BaseLayout } from './layouts/BaseLayout'

import { Main } from '@/pages/questions'
import { QuestionPage } from '@/pages/question'

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: '/questions',
        element: <Main />
      },
      {
        path: '/questions/:id',
        element: <QuestionPage />
      },
      {
        path: '*',
        element: <div>404</div>
      }
    ]
  }
])
