import { motion, AnimatePresence } from 'framer-motion'
import { BiTask, BiSearch } from 'react-icons/bi'

import SectionCard from '../components/ManagementMenu/SectionCard'
import { useState } from 'react'

import { Project } from '../types/managementMenuTypes'

const projects: Project[] = [
  {
    projectTitle: 'Tasks View!',
    projectDescription:
      'View All Tasks, Create New Task, Edit Task, Delete Task',
    projectIcon: <BiTask size={32} />,
    link: '/tasks',
  },
  {
    projectTitle: 'da View!',
    projectDescription:
      'View All Tasks, Create New Task, Edit Task, Delete Task',
    projectIcon: <BiTask size={32} />,
    link: '/tasks',
  },
  {
    projectTitle: 'gasd View!',
    projectDescription:
      'View All Tasks, Create New Task, Edit Task, Delete Task',
    projectIcon: <BiTask size={32} />,
    link: '/tasks',
  },
  {
    projectTitle: 'Tasks Viewe!',
    projectDescription:
      'View All Tasks, Create New Task, Edit Task, Delete Task',
    projectIcon: <BiTask size={32} />,
    link: '/tasks',
  },
  {
    projectTitle: 'Tasks viee!',
    projectDescription:
      'View All Tasks, Create New Task, Edit Task, Delete Task',
    projectIcon: <BiTask size={32} />,
    link: '/tasks',
  },
  {
    projectTitle: 'Tasks jdab!',
    projectDescription:
      'View All Tasks, Create New Task, Edit Task, Delete Task',
    projectIcon: <BiTask size={32} />,
    link: '/tasks',
  },
]

const ManagementMenu = () => {
  const [search, setSearch] = useState<string>('')

  const filteredProjects = projects.filter((project) =>
    project.projectTitle.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <main className="flex justify-center w-full min-h-screen">
      <div className="w-full max-w-[1600px] px-4 pt-28">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <h1 className="text-3xl md:text-5xl font-semibold underline text-center">
            Management Menu
          </h1>
          <label className="input input-bordered flex items-center justify-between">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <BiSearch size={24} />
          </label>
        </div>
        <motion.div
          layout
          className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-16"
        >
          {filteredProjects.map((element: Project) => {
            return (
              <motion.div
                key={element.projectTitle}
                layout
                animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.25 }}
              >
                <AnimatePresence>
                  <SectionCard props={element} />
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </main>
  )
}

export default ManagementMenu
