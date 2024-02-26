export interface FormFieldProps {
  label: string
  type: string
  name: string
  value: string | undefined
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  error: string | undefined
  touched: boolean
}

export interface PriceCardProps {
  cardData: {
    priceMonthly: number
    priceAnnual: number
    priceAllTime: number
    text: string
    title: string
  }
  selected: string
}

export interface AnimatedTabsProps {
  tabs: string[]
  onTabSelect: (selectedTab: string) => void
}

export interface TabProps {
  text: string
  selected: boolean
  setSelected: (text: string) => void
}
