export interface Specialization {
  id: number
  title: string
  description: string
  imageSrc?: string | null
  createdAt?: string
  updatedAt?: string
}

export interface GetSpecializationsParamsRequest {
  page?: number
  limit?: number
}

export interface GetSpecializationsResponse {
  data: Specialization[]
  page?: number
  limit?: number
  total?: number
}
