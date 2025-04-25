import { createSlice } from '@reduxjs/toolkit'

interface initialState {
  isInfoOpen: boolean
}

const initialState: initialState = {
  isInfoOpen: false
}

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    setIsInfoOpen(state, action) {
      state.isInfoOpen = action.payload
    }
  }
})

export const { setIsInfoOpen } = questionSlice.actions
export const questionReducer = questionSlice.reducer
