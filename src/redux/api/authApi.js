import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setToken } from "../features/userSlice";
import { userApi } from "./userApi";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/v1/user/" }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (data) => {
        return {
          url: "login",
          method: "POST",
          body: data,
        };
      },
      transformResponse: (result) => result.body,
      onQueryStarted: async (args, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setToken(data.token));
          await dispatch(userApi.endpoints.getMe.initiate(null));
        } catch (error) {
          console.error(error);
        }
      },
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
