import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userProfilesApi = createApi({
  reducerPath: 'userProfilesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://randomuser.me/' }),
  endpoints: (builder) => ({
    getUserProfiles: builder.query({
      query: (queryParams) => `api/?${queryParams}`,
    }),
  }),
});

export const { useGetUserProfilesQuery } = userProfilesApi;
