import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type {
  GetQuestionsResponse,
  GetQuestionsParamsRequest,
  IQuestion
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
    }),
    getQuestionById: builder.query<IQuestion, number>({
      query: id => {
        return {
          url: `questions/public-questions/${id}`
        }
      }
    })
  })
})

export const {
  useGetPublicQuestionsQuery,
  useLazyGetPublicQuestionsQuery,
  useGetQuestionByIdQuery,
  useLazyGetQuestionByIdQuery
} = questionsApi
