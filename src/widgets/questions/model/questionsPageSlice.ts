import { createSlice } from '@reduxjs/toolkit'

interface QuestionsPageState {
  current: number
}

const initialState: QuestionsPageState = {
  current: 1
}

export const questionsPageSlice = createSlice({
  name: 'questionsPage',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.current = action.payload
    }
  }
})

export const { setCurrentPage } = questionsPageSlice.actions
export default questionsPageSlice.reducer
