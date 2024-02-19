export interface HeroCardProps {
  image: string
  quote: string
  person: string
  workingPosition: string
}

export interface PanelProps {
  open: number
  setOpen: (value: number) => void
  id: number
  icon: React.ReactElement
  title: string
  imgSrc: string
  description: string
}

export interface VerticalAccordionProps {
  items: {
    id: number
    title: string
    icon: React.ReactElement
    imgSrc: string
    description: string
  }[]
}
