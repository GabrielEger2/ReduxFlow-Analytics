import { useEffect } from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, resetUser } from './userSlice'
import { useValidateTokenMutation, useLogOutMutation } from './userApiSlice'

const RequireAuth = () => {
  const user = useSelector(selectUser)
  const location = useLocation()
  const dispatch = useDispatch()
  const [validateToken] = useValidateTokenMutation()
  const [logOut] = useLogOutMutation()

  useEffect(() => {
    window.scrollTo(0, 0)

    const fetchToken = async () => {
      if (!user) {
        return
      }

      const userValidation = await validateToken({})
      if ('error' in userValidation && 'data' in userValidation.error) {
        const errorData = userValidation.error.data as { message: string }
        if (errorData && typeof errorData.message === 'string') {
          console.error(errorData.message)
        }
        dispatch(resetUser())
        logOut({})
      }
    }

    fetchToken()
  }, [user, logOut, dispatch, validateToken])

  if (!user) {
    console.error('User is not authenticated')
    return <Navigate to="/" state={{ from: location }} replace />
  }

  return <Outlet />
}

export default RequireAuth
