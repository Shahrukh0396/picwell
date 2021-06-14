import { createSlice } from '@reduxjs/toolkit'

export const StackExchange = createSlice({
  name: 'apiData',
  initialState: {
    value: {},
  },
  reducers: {
    StockData: (state, action) => {
      state.value = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { StockData } = StackExchange.actions

export default StackExchange.reducer