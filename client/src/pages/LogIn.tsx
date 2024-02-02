import { useState } from 'react'
import { motion } from 'framer-motion'

import LogInRegister from '../components/LogInRegister'

const LogIn = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [isAnimationComplete, setIsAnimationComplete] = useState(false)

  const handleFormTypeChange = () => {
    setIsLogin(!isLogin)
    setIsAnimationComplete(false) // Reset animation completion flag
  }

  const handleAnimationComplete = () => {
    setIsAnimationComplete(true)
  }

  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="card card-side bg-base-100 shadow-xl">
        <div className="absolute h-full">
          <motion.img
            className="object-cover w-[73%] h-full"
            src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="Album"
            style={{ userSelect: 'none' }}
            initial={{ x: 0 }}
            animate={{ x: isLogin ? '100%' : 0 }}
            transition={{ duration: 0.5 }}
            onAnimationComplete={handleAnimationComplete} // Set the onAnimationComplete callback
          />
        </div>
        <div className="flex justify-center">
          <div
            className={`w-full flex ${isLogin && isAnimationComplete ? 'z-10' : ''}`}
          >
            <LogInRegister
              formType="register"
              handleFormTypeChange={handleFormTypeChange}
            />
          </div>
          <div
            className={`w-full flex ${!isLogin && isAnimationComplete ? 'z-10' : ''}`}
          >
            <LogInRegister
              formType="login"
              handleFormTypeChange={handleFormTypeChange}
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default LogIn
