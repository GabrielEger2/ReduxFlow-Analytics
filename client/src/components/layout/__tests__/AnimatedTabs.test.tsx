import { render, fireEvent } from '@testing-library/react'
import AnimatedTabs from '../AnimatedTabs'

describe('AnimatedTabs Component', () => {
  const tabs = ['Tab1', 'Tab2', 'Tab3']
  const mockOnTabSelect = jest.fn()

  it('renders all tabs and selects the first tab by default', () => {
    const { getByText } = render(
      <AnimatedTabs tabs={tabs} onTabSelect={mockOnTabSelect} />,
    )

    // Check if all tabs are rendered
    tabs.forEach((tab) => {
      expect(getByText(tab)).toBeInTheDocument()
    })

    // Check if the first tab is selected by default
    const firstTab = getByText(tabs[0]).closest('button')
    expect(firstTab).toHaveClass('text-base-100')
  })

  it('selects a tab when clicked and calls onTabSelect callback', () => {
    const { getByText } = render(
      <AnimatedTabs tabs={tabs} onTabSelect={mockOnTabSelect} />,
    )

    // Click the second tab
    fireEvent.click(getByText(tabs[1]))

    // Expect onTabSelect to have been called with the second tab's name
    expect(mockOnTabSelect).toHaveBeenCalledWith(tabs[1])

    // Check if the second tab is now selected
    const secondTab = getByText(tabs[1]).closest('button')
    expect(secondTab).toHaveClass('text-base-100')
  })
})
