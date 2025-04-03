export interface Skill {
  id: number
  title: string
  description: string
  imageSrc?: string | null
  createdAt?: string
  updatedAt?: string
}

export interface GetSkillsResponse {
  data: Skill[]
  page?: number
  limit?: number
  total?: number
}

export interface GetSkillsParamsRequest {
  page?: number
  limit?: number
  specializations?: number[]
}
