import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

function getCookie(cookieName: string): string | undefined {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${cookieName}=`)
  if (parts.length === 2) {
    const cookieValue = parts.pop()
    if (cookieValue !== undefined) {
      return cookieValue.split(';').shift()
    }
  }
  return undefined
}

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:5000/api',
  credentials: 'include',
  prepareHeaders: (headers) => {
    const csrfToken = getCookie('csrf_access_token')
    if (csrfToken) {
      headers.set('X-CSRF-TOKEN', csrfToken)
    }
    return headers
  },
})

export const apiSlice = createApi({
  baseQuery,
  endpoints: () => ({}),
})
