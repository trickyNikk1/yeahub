import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FiltersState {
  titleOrDescriptionSearch: string
  specializationId: number
  specializationTitle: string
  skillsIds: number[]
  complexity: number[]
  rate: number[]
  isOpen: boolean
}

const initialState: FiltersState = {
  titleOrDescriptionSearch: '',
  specializationId: 11,
  specializationTitle: '',
  skillsIds: [],
  complexity: [],
  rate: [],
  isOpen: false
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setIsOpen(state, action) {
      state.isOpen = action.payload
    },

    setTitleOrDescriptionSearch(state, action) {
      state.titleOrDescriptionSearch = action.payload
    },

    setSpecializationId(state, action) {
      state.specializationId = action.payload
      state.skillsIds = []
    },

    setSpecializationTitle(state, action) {
      state.specializationTitle = action.payload
    },

    setSkillsIds(state, action) {
      if (state.skillsIds.includes(action.payload)) {
        state.skillsIds = state.skillsIds.filter(id => id !== action.payload)
        return
      }
      state.skillsIds = [...state.skillsIds, action.payload]
    },
    setComplexity(state, action) {
      if (state.complexity.includes(action.payload[0])) {
        state.complexity = state.complexity.filter(
          item => !action.payload.includes(item)
        )
        return
      }
      state.complexity = [...state.complexity, ...action.payload]
    },
    setRate(state, action) {
      if (state.rate.includes(action.payload)) {
        state.rate = state.rate.filter(id => id !== action.payload)
        return
      }
      state.rate = [...state.rate, action.payload]
    },
    setFilters(state, action: PayloadAction<Omit<FiltersState, 'isOpen'>>) {
      state.titleOrDescriptionSearch = action.payload.titleOrDescriptionSearch
      state.specializationId = action.payload.specializationId
      state.skillsIds = action.payload.skillsIds
      state.complexity = action.payload.complexity
      state.rate = action.payload.rate
      state.specializationTitle = action.payload.specializationTitle
    }
  }
})

export const {
  setSpecializationTitle,
  setSkillsIds,
  setTitleOrDescriptionSearch,
  setSpecializationId,
  setComplexity,
  setRate,
  setIsOpen,
  setFilters
} = filtersSlice.actions
export const filtersReducer = filtersSlice.reducer
