import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { GetSkillsParamsRequest, GetSkillsResponse } from '../model/types'

const BASE_URL = import.meta.env.VITE_QUESTIONS_BASE_API_URL

export const skillsApi = createApi({
  reducerPath: 'skillsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getSkills: builder.query<GetSkillsResponse, GetSkillsParamsRequest | void>({
      query: params => {
        return {
          url: '/skills',
          params: { ...params }
        }
      }
    })
  })
})

export const { useGetSkillsQuery, useLazyGetSkillsQuery } = skillsApi
