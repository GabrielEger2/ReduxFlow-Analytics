import { render, screen } from '@testing-library/react'
import LogInRegister from '../LogInRegister'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { store } from '../../app/store'

const handleFormTypeChange = jest.fn()

describe('LogInRegister Component', () => {
  test('renders login form by default', () => {
    render(
      <Provider store={store}>
        <LogInRegister
          handleFormTypeChange={handleFormTypeChange}
          formType="login"
        />
      </Provider>,
    )
    expect(screen.getAllByText(/login/i)).toHaveLength(2)
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
  })

  test('renders register form when formType is register', () => {
    render(
      <Provider store={store}>
        <LogInRegister
          handleFormTypeChange={handleFormTypeChange}
          formType="register"
        />
      </Provider>,
    )
    expect(screen.getAllByText(/register/i)).toHaveLength(3)
    expect(screen.getByLabelText(/new password/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument()
  })

  test('allows switching between login and register forms', async () => {
    render(
      <Provider store={store}>
        <LogInRegister
          handleFormTypeChange={handleFormTypeChange}
          formType="login"
        />
      </Provider>,
    )
    const registerLink = await screen.findByText(
      /First time\? Register here\./i,
    )
    userEvent.click(registerLink)
    expect(await screen.findByText(/register/i)).toBeInTheDocument()
  })
})
