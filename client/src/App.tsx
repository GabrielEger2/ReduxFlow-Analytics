import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Home from './pages/Home'
import LogIn from './pages/LogIn'
import ManagementMenu from './pages/ManagementMenu'

import PublicRoute from './components/PageCore/PublicRoute'
import PrivateRoute from './components/PageCore/PrivateRoute'

const App = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LogIn />
              </PublicRoute>
            }
          />
          <Route
            path="/management-menu"
            element={
              <PrivateRoute>
                <ManagementMenu />
              </PrivateRoute>
            }
          />
        </Routes>
        <ToastContainer
          position="bottom-right"
          newestOnTop
          closeOnClick
          pauseOnFocusLoss
          draggable
        />
      </BrowserRouter>
    </div>
  )
}

export default App
