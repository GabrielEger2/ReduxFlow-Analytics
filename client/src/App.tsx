import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import LogIn from './pages/LogIn'

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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
