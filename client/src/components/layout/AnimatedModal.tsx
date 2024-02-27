import { AnimatePresence, motion } from 'framer-motion'

import { AnimatedModalProps } from '../../types/layoutTypes'

const AnimatedModal = ({
  isOpen,
  setIsOpen,
  icon,
  title,
  text,
  button,
}: AnimatedModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-black/20 min-w-screen backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: '8deg' }}
            animate={{ scale: 1, rotate: '0deg' }}
            exit={{ scale: 0, rotate: '0deg' }}
            onClick={(e) => e.stopPropagation()}
            className="bg-primary text-base-100 card p-6 w-full max-w-lg shadow-xl cursor-default overflow-hidden"
          >
            {icon}
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-center mb-4">{title}</h3>
              <p className="mb-6 text-lg font-semibold">{text}</p>
              <div className="flex">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full btn bg-transparent hover:bg-base-100 text-base-100 hover:text-base-content transition-all duration-500"
                >
                  {button}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default AnimatedModal
