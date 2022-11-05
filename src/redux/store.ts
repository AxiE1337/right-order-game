import { configureStore } from '@reduxjs/toolkit'
import gameConfigSlice from './slices/gameConfig'

export const store = configureStore({
  reducer: {
    gameConfig: gameConfigSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
