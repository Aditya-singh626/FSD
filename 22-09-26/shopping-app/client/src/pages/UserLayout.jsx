
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default UserLayout
