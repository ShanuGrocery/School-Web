import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './component/Navbar'
import Footer from './Component/Footer'

const Layout = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Outlet />  {/* Pages go here */}
      <Footer />
    </div>
  )
}

export default Layout
