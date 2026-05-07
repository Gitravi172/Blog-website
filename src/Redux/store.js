import { configureStore } from '@reduxjs/toolkit'
import  dilsediaryReducer  from './dilsediary.js'

export const store = configureStore({
  reducer: {
blog:dilsediaryReducer
  },
})