import { render, fireEvent, screen } from '@testing-library/react'
import AnimatedModal from '../AnimatedModal'
import '@testing-library/jest-dom'

describe('AnimatedModal Component', () => {
  const mockSetIsOpen = jest.fn()

  test('renders nothing when isOpen is false', () => {
    render(
      <AnimatedModal
        isOpen={true}
        setIsOpen={mockSetIsOpen}
        icon={<div />}
        title="test"
        text="test"
        button="test"
      />,
    )
    expect(screen.queryByText(/some title/i)).not.toBeInTheDocument()
  })

  test('renders correctly when isOpen is true', () => {
    render(
      <AnimatedModal
        isOpen={true}
        setIsOpen={mockSetIsOpen}
        icon={<div />}
        title="Test Title"
        text="Test Text"
        button="Close"
      />,
    )
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Text')).toBeInTheDocument()
    expect(screen.getByText('Close')).toBeInTheDocument()
  })

  test('closes when button inside modal is clicked', () => {
    render(
      <AnimatedModal
        isOpen={true}
        setIsOpen={mockSetIsOpen}
        icon={<div />}
        title="Test Title"
        text="Test Text"
        button="Close"
      />,
    )
    fireEvent.click(screen.getByText('Close'))
    expect(mockSetIsOpen).toHaveBeenCalledWith(false)
  })
})
