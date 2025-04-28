import { Outlet } from 'react-router'

import { Header } from '@/widgets/header'

const BaseLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
export default BaseLayout
