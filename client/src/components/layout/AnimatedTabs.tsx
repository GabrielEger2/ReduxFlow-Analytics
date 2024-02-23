import { motion } from 'framer-motion'
import { useState } from 'react'

interface AnimatedTabsProps {
  tabs: string[]
  onTabSelect: (selectedTab: string) => void
}

interface TabProps {
  text: string
  selected: boolean
  setSelected: (text: string) => void
}

const AnimatedTabs: React.FC<AnimatedTabsProps> = ({ tabs, onTabSelect }) => {
  const [selected, setSelected] = useState(tabs[0])

  const handleTabSelect = (tab: string) => {
    setSelected(tab)
    onTabSelect(tab)
  }
  return (
    <div className="px-4 flex items-center flex-wrap space-x-4">
      {tabs.map((tab) => (
        <Tab
          text={tab}
          selected={selected === tab}
          setSelected={handleTabSelect}
          key={tab}
        />
      ))}
    </div>
  )
}

const Tab: React.FC<TabProps> = ({ text, selected, setSelected }) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected && 'text-base-100'
      } transition-colors btn text-lg btn-md rounded-md relative bg-transparent hover:bg-transparent`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: 'spring', duration: 0.5 }}
          className="absolute inset-0 z-0 bg-primary rounded-md"
        />
      )}
    </button>
  )
}

export default AnimatedTabs
