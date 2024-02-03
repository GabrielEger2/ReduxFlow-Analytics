import { Form, Formik } from 'formik'
import { loginSchema, registerSchema } from '../schemas/loginRegisterSchema'

import {
  LogInRegisterProps,
  loginTypes,
  registerTypes,
  formAction,
} from '../types/LoginRegisterTypes'

const onSubmit = async (
  values: loginTypes | registerTypes,
  actions: formAction,
) => {
  console.log(values)
  await new Promise((resolve) => setTimeout(resolve, 1000))
  actions.resetForm()
}

const LogInRegister: React.FC<LogInRegisterProps> = ({
  formType,
  handleFormTypeChange,
}) => {
  const initialValues =
    formType === 'login'
      ? { email: '', password: '', rememberMe: false }
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
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">
                  Email{' '}
                  <span className="text-error">
                    {touched.email && errors.email && errors.email}
                  </span>
                </span>
              </div>
              <input
                type="text"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Valid email address"
                className="input input-bordered w-full"
              />
            </label>
            {formType === 'login' ? (
              <>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">
                      Password{' '}
                      <span className="text-error">
                        {touched.password && errors.password && errors.password}
                      </span>
                    </span>
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Valid email address"
                    className="input input-bordered w-full"
                  />
                </label>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Remember me</span>
                    <input
                      type="checkbox"
                      id="rememberMe"
                      name="rememberMe"
                      onChange={handleChange}
                      checked={values.rememberMe}
                      className="checkbox checkbox-primary [--chkfg:white]"
                    />
                  </label>
                </div>
              </>
            ) : (
              <>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">
                      New Password{' '}
                      <span className="text-error">
                        {touched.newPassword &&
                          errors.newPassword &&
                          errors.newPassword}
                      </span>
                    </span>
                  </div>
                  <input
                    type="text"
                    id="newPassword"
                    name="newPassword"
                    value={values.newPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Valid email address"
                    className="input input-bordered w-full"
                  />
                </label>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">
                      Confirm Password{' '}
                      <span className="text-error">
                        {touched.confirmPassword &&
                          errors.confirmPassword &&
                          errors.confirmPassword}
                      </span>
                    </span>
                  </div>
                  <input
                    type="text"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Valid email address"
                    className="input input-bordered w-full"
                  />
                </label>
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
                >
                  Login
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
                >
                  Register
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