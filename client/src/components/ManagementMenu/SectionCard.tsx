import { Link } from 'react-router-dom'

import { Project, SectionCardProps } from '../../types/managementMenuTypes'

const SectionCard: React.FC<SectionCardProps> = (props) => {
  const sectionCardData: Project = props.props

  return (
    <Link
      to={sectionCardData.link}
      className="card card-side bg-base-100 shadow-xl w-full items-center h-40"
    >
      <div className="card-body">
        <h2 className="card-title">{sectionCardData.projectTitle}</h2>
        <div className="flex items-center gap-4 mt-4">
          <button className="btn btn-primary text-base-100">
            {sectionCardData.projectIcon}
          </button>
          <p className="text-left">{sectionCardData.projectDescription}</p>
        </div>
      </div>
    </Link>
  )
}

export default SectionCard
