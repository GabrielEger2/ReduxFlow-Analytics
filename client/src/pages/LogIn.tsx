import { useState } from 'react'
import { motion } from 'framer-motion'

import LogInRegister from '../components/LogInRegister/LogInRegister'
import CSIRACRPhoto from '../assets/imgs/CSIRACPhoto.jpg'

const LogIn = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false)
  const [isAnimationComplete, setIsAnimationComplete] = useState<boolean>(false)
  const handleFormTypeChange = () => {
    setIsLogin(!isLogin)
    setIsAnimationComplete(false) // Reset animation completion flag
  }

  const handleAnimationComplete = () => {
    setIsAnimationComplete(true)
  }

  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="card card-side bg-base-100 shadow-xl my-16">
        <div className="hidden absolute sm:block h-full">
          <motion.img
            className="object-cover w-80 h-full"
            src={CSIRACRPhoto}
            alt="Photo of the CSIRAC computer in 1949."
            style={{ userSelect: 'none' }}
            initial={{ x: 0 }}
            animate={{ x: isLogin ? 320 : 0 }}
            transition={{ duration: 0.3 }}
            onAnimationComplete={handleAnimationComplete} // Set the onAnimationComplete callback
          />
        </div>
        <div className="flex justify-center">
          <div
            className={`w-full ${isLogin ? '' : 'hidden sm:block'} ${isLogin && isAnimationComplete ? 'z-10' : ''}`}
          >
            <LogInRegister
              formType="register"
              handleFormTypeChange={handleFormTypeChange}
            />
          </div>
          <div
            className={`w-full ${!isLogin ? '' : 'hidden sm:block'} ${!isLogin && isAnimationComplete ? 'z-10' : ''}`}
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
