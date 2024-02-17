import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import LogIn from './pages/LogIn'

const App = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
