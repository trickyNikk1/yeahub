import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type {
  GetQuestionsResponse,
  GetQuestionsParamsRequest
} from '../model/types'

const BASE_URL = import.meta.env.VITE_QUESTIONS_BASE_API_URL

export const questionsApi = createApi({
  reducerPath: 'questionsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getPublicQuestions: builder.query<
      GetQuestionsResponse,
      GetQuestionsParamsRequest | void
    >({
      query: params => {
        return {
          url: 'questions/public-questions',
          params: { ...params }
        }
      }
    })
  })
})

export const { useGetPublicQuestionsQuery, useLazyGetPublicQuestionsQuery } =
  questionsApi
