import SideBar from './SideBar'
import Footer from './Footer'

const PrivateRoute = ({ children }) => {
  return (
    <div>
      <SideBar />
      {children}
      <Footer />
    </div>
  )
}

export default PrivateRoute
