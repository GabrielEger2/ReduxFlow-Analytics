import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import LogIn from './pages/LogIn'

import Footer from './components/layout/Footer'

const App = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <BrowserRouter>
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
