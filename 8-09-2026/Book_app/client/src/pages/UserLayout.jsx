import React from 'react'
import Header from '../components/Header'   
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Footer from '../components/footer'

const UserLayout = () => {
  return (
    <div className="user-layout">
      <Header />
      <Navbar />
      <Home />
      <Footer />    
    </div>
  )
}

export default UserLayout
