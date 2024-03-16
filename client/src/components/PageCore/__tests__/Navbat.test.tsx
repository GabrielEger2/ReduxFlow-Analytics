import { BrowserRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import Navbar from '../Navbar'

// Mock useNavigate and useLocation hooks from react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
  useLocation: () => ({
    pathname: '/',
  }),
}))

// Mock customScroll hook
jest.mock('../../../hooks/useCustomScroll', () => ({
  __esModule: true,
  default: () => ({
    handleLinkClick: jest.fn(),
  }),
}))

describe('Navbar Component', () => {
  test('renders without crashing', () => {
    const { container } = render(
      <Router>
        <Navbar />
      </Router>,
    )
    expect(container).toBeInTheDocument()
  })

  test('contains home, about us, pricing, and sign in links', () => {
    const { getByText } = render(
      <Router>
        <Navbar />
      </Router>,
    )
    expect(getByText('Home')).toBeInTheDocument()
    expect(getByText('About Us')).toBeInTheDocument()
    expect(getByText('Pricing')).toBeInTheDocument()
    expect(getByText('Sign In')).toBeInTheDocument()
  })
})
