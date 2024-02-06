import { apiSlice } from '../../app/api/apiSlice'

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    regiser: builder.mutation({
      query: (credentials) => ({
        url: '/user/',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: '/user/login',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    logOut: builder.mutation({
      query: () => ({
        url: '/user/logout',
        method: 'POST',
      }),
    }),
    validateToken: builder.mutation({
      query: (credentials) => ({
        url: '/user/validate-token',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
  }),
})

export const {
  useRegiserMutation,
  useLoginMutation,
  useLogOutMutation,
  useValidateTokenMutation,
} = userApiSlice
