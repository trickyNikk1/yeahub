import { Outlet } from 'react-router'

import { Header } from '@/widgets/header'

export const BaseLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
