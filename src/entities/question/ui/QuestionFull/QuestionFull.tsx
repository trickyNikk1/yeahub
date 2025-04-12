import { useParams } from 'react-router'

import { QuestionFullContent } from '../QuestionFullContent/QuestionFullContent'
import { QuestionFullInfo } from '../QuestionFullInfo/QuestionFullInfo'
import { useGetQuestionByIdQuery } from '../../api/question'

export const QuestionFull = () => {
  const { id } = useParams()
  const { data, isLoading } = useGetQuestionByIdQuery(Number(id))
  return (
    <>
      <QuestionFullContent data={data} isLoading={isLoading} />
      <QuestionFullInfo data={data} isLoading={isLoading} />
    </>
  )
}
