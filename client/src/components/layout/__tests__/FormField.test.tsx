import { render, fireEvent } from '@testing-library/react'
import FormField from '../FormField'

test('renders FormField and checks label, input and error message', () => {
  const mockOnChange = jest.fn()
  const mockOnBlur = jest.fn()

  const { getByLabelText, getByText, rerender } = render(
    <FormField
      label="Test Label"
      type="text"
      name="testName"
      value=""
      onChange={mockOnChange}
      onBlur={mockOnBlur}
      error=""
      touched={false}
    />,
  )

  // Check if label is rendered
  expect(getByText('Test Label')).toBeInTheDocument()

  // Check if input is rendered and interact with it
  const input = getByLabelText('Test Label') as HTMLInputElement
  expect(input).toBeInTheDocument()
  fireEvent.change(input, { target: { value: 'test' } })
  expect(mockOnChange).toHaveBeenCalled()

  // Check if onBlur works
  fireEvent.blur(input)
  expect(mockOnBlur).toHaveBeenCalled()

  // Rerender with error and touched
  rerender(
    <FormField
      label="Test Label"
      type="text"
      name="testName"
      value=""
      onChange={mockOnChange}
      onBlur={mockOnBlur}
      error="Test error"
      touched={true}
    />,
  )

  // Check if error message is displayed
  expect(getByText('Test error')).toBeInTheDocument()
})
