import Navbar from './Navbar'
import Footer from './Footer'

const PublicRoute = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default PublicRoute
