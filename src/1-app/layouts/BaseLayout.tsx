import { Outlet } from 'react-router'
import { Header } from '@/3-widgets/header'

export const BaseLayout = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}
