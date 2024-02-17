import * as yup from 'yup'

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const loginSchema = yup.object().shape({
  email: yup.string().email('must be valid').required('is required'),
  password: yup.string().required('is required'),
})

export const registerSchema = yup.object().shape({
  email: yup.string().email('must be valid').required('is required'),
  newPassword: yup
    .string()
    .min(5, 'must be at least 5 characters')
    .max(30, 'must be at most 30 characters')
    .matches(passwordRules, {
      message:
        'must have 1 upper case letter, 1 lower case letter, 1 numeric digit',
    })
    .required('Required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('newPassword')], 'must match New Password')
    .required('is required'),
})
