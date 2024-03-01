import { useState } from 'react'
import { Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import { loginSchema, registerSchema } from '../../schemas/loginRegisterSchema'
import {
  LogInRegisterProps,
  loginTypes,
  registerTypes,
  formAction,
} from '../../types/loginRegisterTypes'
import {
  useRegiserMutation,
  useLoginMutation,
} from '../../features/user/userApiSlice'
import { setUser } from '../../features/user/userSlice'
import FormField from '../layout/FormField'

const LogInRegister: React.FC<LogInRegisterProps> = ({
  formType,
  handleFormTypeChange,
}) => {
  const [register] = useRegiserMutation()
  const [login] = useLoginMutation()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onSubmit = async (
    values: loginTypes | registerTypes,
    actions: formAction,
  ) => {
    setIsLoading(true)
    if (formType === 'login') {
      const { email, password } = values as loginTypes
      try {
        const response = await login({ email, password }).unwrap()
        dispatch(
          setUser({ id: response.logged_id, email: response.logged_email }),
        )
        toast.success(response.message)
      } catch (error) {
        console.error(error)
        toast.error('Failed to log in')
      }
    } else {
      const { email, newPassword: password } = values as registerTypes
      try {
        const response = await register({ email, password }).unwrap()
        toast.success(response.message)
      } catch (error) {
        console.error(error)
        toast.error('Failed to register')
      }
    }
    setIsLoading(false)
    actions.resetForm()
  }

  const initialValues =
    formType === 'login'
      ? { email: '', password: '' }
      : { email: '', newPassword: '', confirmPassword: '' }

  const validationSchema = formType === 'login' ? loginSchema : registerSchema

  return (
    <div className="card-body w-80">
      <h2 className="card-title">
        {formType === 'login' ? 'LogIn' : 'Register'}
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          resetForm,
          isValid,
        }) => (
          <Form onSubmit={handleSubmit}>
            <FormField
              label="Email"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
              touched={!!touched.email}
            />
            {formType === 'login' ? (
              <>
                <FormField
                  label="Password"
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.password}
                  touched={!!touched.password}
                />
              </>
            ) : (
              <>
                <FormField
                  label="New Password"
                  type="password"
                  name="newPassword"
                  value={values.newPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.newPassword}
                  touched={!!touched.newPassword}
                />
                <FormField
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.confirmPassword}
                  touched={!!touched.confirmPassword}
                />
              </>
            )}
            <div className="form-control">
              <div className="label">
                <span
                  onClick={() => {
                    handleFormTypeChange()
                    resetForm()
                  }}
                  className="label-text underline cursor-pointer"
                >
                  {formType === 'login'
                    ? 'First time? Register here.'
                    : 'Already registered? Log in here.'}
                </span>
              </div>
            </div>
            <div className="card-actions justify-center mt-2">
              {formType === 'login' ? (
                <button
                  disabled={
                    !isValid || values.email === '' || values.password === ''
                  }
                  className="btn btn-primary w-full text-base-100"
                  type="submit"
                >
                  {isLoading ? (
                    <span className="loading loading-dots loading-md" />
                  ) : (
                    'Login'
                  )}
                </button>
              ) : (
                <button
                  disabled={
                    !isValid ||
                    values.email === '' ||
                    values.newPassword === '' ||
                    values.confirmPassword === ''
                  }
                  className="btn btn-primary w-full text-base-100"
                  type="submit"
                >
                  {isLoading ? (
                    <span className="loading loading-dots loading-md" />
                  ) : (
                    'Register'
                  )}
                </button>
              )}
            </div>
          </Form>
        )}
      </Formik>
      {formType === 'login' && (
        <div className="mt-4 h-full">
          <p>DEMO USER: demouser@gmail.com</p>
          <p>DEMO PASSWORD: Dem0Password</p>
        </div>
      )}
    </div>
  )
}

export default LogInRegister
