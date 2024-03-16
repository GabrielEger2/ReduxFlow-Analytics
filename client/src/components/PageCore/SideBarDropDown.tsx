import {
  FiEdit,
  FiChevronDown,
  FiTrash,
  FiShare,
  FiPlusSquare,
} from 'react-icons/fi'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Option = ({ text, Icon, setOpen, route }) => {
  const navigate = useNavigate()

  return (
    <motion.li
      variants={itemVariants}
      onClick={() => {
        setOpen(false)
        navigate(route)
      }}
      className="btn btn-sm btn-ghost justify-start"
    >
      <motion.span className="ml-2" variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  )
}

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.1,
    },
  },
}

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
}

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: 'beforeChildren',
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: 'afterChildren',
    },
  },
}

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
}

const SideBarDropDrown = () => {
  const [open, setOpen] = useState(false)

  return (
    <motion.div animate={open ? 'open' : 'closed'} className="relative">
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex items-center btn btn-ghost w-full justify-start"
      >
        <motion.span variants={iconVariants}>
          <FiChevronDown size={20} />
        </motion.span>
        <span className="font-bold">Employee Management</span>
      </button>

      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ originY: 'top', translateX: '-50%' }}
        className="flex flex-col space-y-1 rounded-lg absolute top-[100%] left-[50%] w-full overflow-hidden"
      >
        <Option route={'/'} setOpen={setOpen} Icon={FiEdit} text="Edit" />
        <Option
          route={'/'}
          setOpen={setOpen}
          Icon={FiPlusSquare}
          text="Duplicate"
        />
        <Option route={'/'} setOpen={setOpen} Icon={FiShare} text="Share" />
        <Option route={'/'} setOpen={setOpen} Icon={FiTrash} text="Remove" />
      </motion.ul>
    </motion.div>
  )
}

export default SideBarDropDrown
