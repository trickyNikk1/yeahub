import { Skill } from '@/shared/model'
import { Specialization } from '@/shared/model'

export interface IQuestion {
  id: number
  title: string
  description: string
  code?: string | null
  imageSrc?: string | null
  keywords: string[]
  longAnswer: string
  shortAnswer: string
  status: 'public'
  rate: number
  complexity: number
  createdAt: string
  updatedAt: string
  createdBy: string
  updatedBy: string | null
  questionSpecializations: Specialization[]
  questionSkills: Skill[]
  checksCount?: number
  isLearned?: boolean
  profileId?: string
}

type skillFilterMode = 'ALL' | 'ANY'

export interface GetQuestionsParamsRequest {
  page?: number
  limit?: number
  title?: string
  titleOrDescription?: string
  skills?: number[]
  complexity?: number[]
  rate?: number[]
  keywords?: string[]
  skillFilterMode?: skillFilterMode
  specialization?: number | number[]
  order?: string
  orderBy?: string
  random?: boolean
  profileId?: string
}

export interface GetQuestionsResponse {
  data: IQuestion[]
  total: number
  page: number
  limit: number
}
