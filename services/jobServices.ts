import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = async (args:any, api:any, extraOptions:any) => {
  const rawResponse = await fetchBaseQuery({
    baseUrl: 'https://dvtools.bigvision.ai/jobs_data',
  })(args, api, extraOptions);

  if (rawResponse.error) {
    return {
      ...rawResponse,
      data: {
        ...rawResponse.data,
        statusCode: rawResponse.error.status,
      },
    };
  }

  return {
    ...rawResponse,
    data: {
      ...rawResponse.data,
      statusCode: rawResponse.meta?.response?.status,
    },
  };
};

const jobServices = createApi({
  reducerPath: 'jobsearch',
  baseQuery,
  endpoints: (builder) => ({
    fetchAllData: builder.mutation({
      query: ({ data, page }) => ({
        url: `jobs?page=${page}&size=9`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useFetchAllDataMutation } = jobServices;
export default jobServices;
