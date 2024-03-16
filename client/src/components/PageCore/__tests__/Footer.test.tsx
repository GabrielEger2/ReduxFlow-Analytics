import { render } from '@testing-library/react'
import Footer from '../Footer'

describe('Footer Component', () => {
  test('renders without crashing', () => {
    const { container } = render(<Footer />)
    expect(container).toBeInTheDocument()
  })

  test('renders company name and slogan', () => {
    const { getByText } = render(<Footer />)
    expect(getByText('ReduxFlow')).toBeInTheDocument()
    expect(getByText('Simple management solution.')).toBeInTheDocument()
  })
})
