export interface Project {
  projectTitle: string
  projectDescription: string
  projectIcon: React.ReactElement
  link: string
}

export interface SectionCardProps {
  props: Project
}
