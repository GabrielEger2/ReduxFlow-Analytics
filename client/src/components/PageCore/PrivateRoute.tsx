import SideBar from './SideBar'
import Footer from './Footer'

const PrivateRoute = ({ children }) => {
  return (
    <main>
      <div className="flex">
        <SideBar />
        {children}
      </div>
      <div className="ml-[300px]">
        <Footer />
      </div>
    </main>
  )
}

export default PrivateRoute
