import { createBrowserRouter } from 'react-router'

import { BaseLayout } from './layouts/BaseLayout'

import { Main } from '@/pages/main'

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
        path: '*',
        element: <div>404</div>
      }
    ]
  }
])
