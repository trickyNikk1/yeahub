import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

export type SkeletonType =
  | 'questionsList'
  | 'options'
  | 'optionsReverse'
  | 'questionFullContent'
  | 'questionFullInfo'

export interface Skill {
  id: number
  title: string
  description: string
  imageSrc?: string | null
  createdAt?: string
  updatedAt?: string
}
export interface Specialization {
  id: number
  title: string
  description: string
  imageSrc?: string | null
  createdAt?: string
  updatedAt?: string
}

export interface IFilters {
  titleOrDescriptionSearch: string
  specializationId: number
  specializationTitle: string
  skillsIds: number[]
  complexity: number[]
  rate: number[]
}

export interface IFilters {
  titleOrDescriptionSearch: string
  specializationId: number
  specializationTitle: string
  skillsIds: number[]
  complexity: number[]
  rate: number[]
}

export type ErrorType =
  | Error
  | FetchBaseQueryError
  | SerializedError
  | undefined
  | null
