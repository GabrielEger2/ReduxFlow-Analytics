import { apiSlice } from '../../app/api/apiSlice'

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/user/login',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    regiser: builder.mutation({
      query: (credentials) => ({
        url: '/user',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
  }),
})

export const { useLoginMutation, useRegiserMutation } = userApiSlice
