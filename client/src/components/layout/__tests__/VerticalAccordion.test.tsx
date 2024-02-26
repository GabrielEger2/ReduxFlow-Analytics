import { render, fireEvent } from '@testing-library/react'
import VerticalAccordion from '../VerticalAccordion'
import { useWindowSize } from '../../../hooks/useWindowSize'

// Mock the useWindowSize hook
jest.mock('../../hooks/useWindowSize', () => ({
  useWindowSize: jest.fn(),
}))

const mockItems = [
  {
    id: 1,
    title: 'Item 1',
    description: 'Description 1',
    imgSrc: '',
    icon: <div />,
  },
  {
    id: 2,
    title: 'Item 2',
    description: 'Description 2',
    imgSrc: '',
    icon: <div />,
  },
  {
    id: 3,
    title: 'Item 3',
    description: 'Description 3',
    imgSrc: '',
    icon: <div />,
  },
]

describe('VerticalAccordion', () => {
  beforeEach(() => {
    useWindowSize.mockReturnValue({ width: 1024 })
  })

  test('renders correctly with the first item open', () => {
    const { getByText } = render(<VerticalAccordion items={mockItems} />)
    expect(getByText('Item 1')).toBeInTheDocument()
    expect(getByText('Description 1')).toBeInTheDocument()
  })

  test('opens a panel on click', () => {
    const { getByText } = render(<VerticalAccordion items={mockItems} />)
    const secondItemButton = getByText('Item 2')
    fireEvent.click(secondItemButton)
    expect(getByText('Description 2')).toBeInTheDocument()
  })
})
