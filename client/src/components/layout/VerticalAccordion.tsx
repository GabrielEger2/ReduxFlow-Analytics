import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { useWindowSize } from '../../hooks/useWindowSize'
import { VerticalAccordionProps, PanelProps } from '../../types/homeTypes'

const VerticalAccordion: React.FC<VerticalAccordionProps> = ({ items }) => {
  const [open, setOpen] = useState<number>(items[0].id)

  useEffect(() => {
    const interval = setInterval(() => {
      setOpen((prev) => {
        return prev === items.length ? 1 : prev + 1
      })
    }, 10000)

    return () => clearInterval(interval)
  }, [items.length, open])

  return (
    <section className="p-4 bg-primary">
      <div className="flex flex-col lg:flex-row h-fit lg:h-[550px] w-full mx-auto shadow-xl overflow-hidden">
        {items.map((item, index) => {
          return (
            <Panel
              key={index}
              open={open}
              setOpen={setOpen}
              id={index + 1}
              icon={item.icon}
              title={item.title}
              imgSrc={item.imgSrc}
              description={item.description}
            />
          )
        })}
      </div>
    </section>
  )
}

const Panel: React.FC<PanelProps> = ({
  open,
  setOpen,
  id,
  icon,
  title,
  imgSrc,
  description,
}) => {
  const { width } = useWindowSize()
  const isOpen = open === id

  return (
    <>
      <button
        className="bg-base-100 hover:bg-base-200 p-3 border-r-[1px] border-b-[1px] border-base-300 
                     flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
        onClick={() => setOpen(id)}
      >
        <span
          style={{
            writingMode: 'vertical-lr',
          }}
          className="text-xl font-light lg:rotate-180 hidden lg:block"
        >
          {title}
        </span>
        <span className="block lg:hidden text-xl font-light">{title}</span>
        <div className="w-6 lg:w-full aspect-square bg-primary text-base-100 grid place-items-center">
          {icon}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
            className="w-full h-full overflow-hidden relative flex items-end"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-4 py-2 bg-neutral/70 backdrop-blur-sm text-base-100"
            >
              <p>{description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default VerticalAccordion

const panelVariants = {
  open: {
    width: '100%',
    height: '100%',
  },
  closed: {
    width: '0%',
    height: '100%',
  },
}

const panelVariantsSm = {
  open: {
    width: '100%',
    height: '200px',
  },
  closed: {
    width: '100%',
    height: '0px',
  },
}

const descriptionVariants = {
  open: {
    opacity: 1,
    y: '0%',
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: '100%' },
}
