import { QuestionAccordion } from './ui/QuestionAccordion/QuestionAccordion'
import { QuestionFull } from './ui/QuestionFull/QuestionFull'
import {
  useGetPublicQuestionsQuery,
  useGetQuestionByIdQuery
} from './api/question'
import { questionsApi } from './api/question'
import { questionReducer } from './model/slice'

export {
  questionReducer,
  QuestionFull,
  useGetPublicQuestionsQuery,
  questionsApi,
  QuestionAccordion,
  useGetQuestionByIdQuery
}
