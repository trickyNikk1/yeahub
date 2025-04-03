import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type {
  GetSpecializationsParamsRequest,
  GetSpecializationsResponse
} from '../model/types'

const BASE_URL = import.meta.env.VITE_QUESTIONS_BASE_API_URL

export const specializationsApi = createApi({
  reducerPath: 'specializationsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getSpecializations: builder.query<
      GetSpecializationsResponse,
      GetSpecializationsParamsRequest | void
    >({
      query: params => {
        return {
          url: '/specializations',
          params: { ...params }
        }
      }
    })
  })
})

export const { useGetSpecializationsQuery, useLazyGetSpecializationsQuery } =
  specializationsApi
