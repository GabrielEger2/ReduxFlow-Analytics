import { render, screen } from '@testing-library/react'
import PriceCard from '../PriceCard'

describe('PriceCard Component Tests', () => {
  const cardData = {
    title: 'Basic Plan',
    priceMonthly: 10,
    priceAnnual: 100,
    priceAllTime: 300,
    text: 'A great plan for starters.',
  }

  it('renders correctly with Monthly selection', () => {
    render(<PriceCard cardData={cardData} selected="Monthly" />)
    expect(screen.getByText('Basic Plan')).toBeInTheDocument()
    expect(screen.getByText('$10/Month')).toBeInTheDocument()
    expect(screen.getByText(cardData.text)).toBeInTheDocument()
  })

  it('renders correctly with Annual selection', () => {
    render(<PriceCard cardData={cardData} selected="Annual" />)
    expect(screen.getByText('$100/Year')).toBeInTheDocument()
  })

  it('renders correctly with All Time selection', () => {
    render(<PriceCard cardData={cardData} selected="All Time" />)
    expect(screen.getByText('$300/Lifetime')).toBeInTheDocument()
  })
})
