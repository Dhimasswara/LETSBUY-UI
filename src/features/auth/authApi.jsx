import { apiSlice } from "../../app/api/authApi";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (data) =>  ({
        url: "/user/login",
        method: "POST",
        body: data
      }),

      transformResponse: (response, meta, args) => response.data
    }),
    userRegister: builder.mutation({
      query: (data) =>  ({
        url: "/user/register",
        method: "POST",
        body: data
      }),

      transformResponse: (response, meta, args) => response.data
    }),

    getUserProfile: builder.query({
      query: () =>  ({
        url: "user/get/profile"
      }),

      transformResponse: (response, meta, args) => response.data
    }),
  })
})

export const { useUserLoginMutation, useUserRegisterMutation, useGetUserProfileQuery } = authApi 