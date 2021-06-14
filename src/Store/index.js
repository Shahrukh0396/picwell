import { configureStore } from '@reduxjs/toolkit'
import  { StackExchange } from './reducer'

export default configureStore({
  reducer: {
    StocksData: StackExchange
  },
})