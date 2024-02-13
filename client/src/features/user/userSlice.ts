import { createSlice } from '@reduxjs/toolkit'

import { userState } from '../../types/loginRegisterTypes'

const getFromLocalStorage = (key: string) => {
  const value = localStorage.getItem(key)
  if (value && value !== 'undefined') {
    try {
      return JSON.parse(value)
    } catch (e) {
      console.error(`Error parsing local storage key ${key}:`, e)
      return null
    }
  }
  return null
}

const initialState: userState = {
  id: getFromLocalStorage('id'),
  email: getFromLocalStorage('email'),
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id
      state.email = action.payload.email
      localStorage.setItem('id', action.payload.id)
      localStorage.setItem('email', action.payload.email)
    },
    resetUser: (state) => {
      state.id = null
      state.email = null
      localStorage.removeItem('id')
      localStorage.removeItem('email')
    },
  },
})

export const { setUser, resetUser } = userSlice.actions

export default userSlice.reducer

export const selectUser = (state: { user: userState }) => state.user
