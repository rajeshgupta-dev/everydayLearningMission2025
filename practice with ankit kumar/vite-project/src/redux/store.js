import React from 'react'
import { createSlice, configureStore } from '@reduxjs/toolkit'
import counterReducer from './sliceCounter'



const store = configureStore({
  reducer: { counter : counterReducer }
})
export default store