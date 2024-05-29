import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const paramServices = createApi({
  reducerPath: 'paramServices',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dvtools.bigvision.ai/jobs_data/' }),
  endpoints: (builder) => ({
    fetchSkills: builder.query({
      query: () => 'skills',
    }),
    fetchCountry: builder.query({
      query: () => 'countries',
    }),
  }),
});

export const { useFetchSkillsQuery, useFetchCountryQuery } = paramServices;
export default paramServices;
