import { configureStore } from '@reduxjs/toolkit'

import { questionsApi } from '@/entities/question'
import { questionsPageReducer } from '@/widgets/questions'
import { specializationsApi } from '@/entities/specialization'
import { skillsApi } from '@/entities/skill'
import { filtersReducer } from '@/features/filters'

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    questionsPage: questionsPageReducer,
    [skillsApi.reducerPath]: skillsApi.reducer,
    [questionsApi.reducerPath]: questionsApi.reducer,
    [specializationsApi.reducerPath]: specializationsApi.reducer
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      questionsApi.middleware,
      specializationsApi.middleware,
      skillsApi.middleware
    )
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
