export type SkeletonType = 'questionsList' | 'questionPage'

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
