import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
  return (
    <div className="layout">
        <Navbar/>
        <div className="page container mt-3">
            {children}
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Layout