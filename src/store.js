import { configureStore } from '@reduxjs/toolkit'
import  dilsediaryReducer  from './redux/dilsediary.js'

export const store = configureStore({
  reducer: {
blog:dilsediaryReducer
  },
})