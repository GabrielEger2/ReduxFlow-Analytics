import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import RequireAuth from './features/user/RequireAuth'

import Home from './pages/Home'
import LogIn from './pages/LogIn'
import ManagementMenu from './pages/ManagementMenu'

import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'

const App = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route element={<RequireAuth />}>
            <Route path="/management-menu" element={<ManagementMenu />} />
          </Route>
        </Routes>
        <Footer />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </BrowserRouter>
    </div>
  )
}

export default App
