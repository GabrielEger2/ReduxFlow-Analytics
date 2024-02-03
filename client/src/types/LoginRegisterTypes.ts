export interface LogInRegisterProps {
  formType: string
  handleFormTypeChange: () => void
}

export type loginTypes = {
  email: string
  password: string
  rememberMe: boolean
}

export type registerTypes = {
  email: string
  newPassword: string
  confirmPassword: string
}

export type formAction = {
  resetForm: () => void
}
