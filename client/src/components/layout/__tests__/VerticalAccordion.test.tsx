import { render, fireEvent, act } from '@testing-library/react'
import VerticalAccordion from '../VerticalAccordion'
import { jest } from '@jest/globals'

// Mock useWindowSize hook
jest.mock('../../../hooks/useWindowSize', () => ({
  useWindowSize: () => ({ width: 1024 }),
}))

describe('VerticalAccordion', () => {
  const items = [
    {
      id: 1,
      icon: <div />,
      title: 'Panel 1',
      imgSrc: 'url1',
      description: 'Description 1',
    },
    {
      id: 2,
      icon: <div />,
      title: 'Panel 2',
      imgSrc: 'url2',
      description: 'Description 2',
    },
  ]

  it('renders the correct number of panels', () => {
    const { getAllByRole } = render(<VerticalAccordion items={items} />)
    expect(getAllByRole('button').length).toBe(items.length)
  })

  it('changes the open panel automatically', async () => {
    jest.useFakeTimers()
    const { getByText } = render(<VerticalAccordion items={items} />)

    // Initially, first panel should be open
    expect(getByText('Description 1')).toBeInTheDocument()

    // Advance timers by 10 seconds
    act(() => {
      jest.advanceTimersByTime(10000)
    })

    // Now, second panel should be open
    expect(getByText('Description 2')).toBeInTheDocument()

    jest.useRealTimers()
  })

  it('allows manual panel change on click', () => {
    const { getByText, getAllByRole } = render(
      <VerticalAccordion items={items} />,
    )

    const secondPanelButton = getAllByRole('button')[1]
    fireEvent.click(secondPanelButton)

    expect(getByText('Description 2')).toBeInTheDocument()
  })
})
