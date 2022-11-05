import { createSlice } from '@reduxjs/toolkit'

interface IState {
  config: {
    value: string
    items: string
    maxValue: number
    minValue: number
    gameOrder: string
    gameStatus: string
  }
}

const initialState: IState = {
  config: {
    value: 'A',
    items: '2',
    maxValue: 1000,
    minValue: 1,
    gameOrder: 'ascending',
    gameStatus: 'idle',
  },
}

export const gameConfigSlice = createSlice({
  name: 'gameConfig',
  initialState,
  reducers: {
    gameValue(state, { payload }) {
      state.config.value = payload
    },
    gameItems(state, { payload }) {
      state.config.items = payload
    },
    changeOrder(state, { payload }) {
      state.config.gameOrder = payload
    },
    changeGameStatus(state, { payload }) {
      state.config.gameStatus = payload
      if (payload === 'idle') {
        state.config.items = initialState.config.items
        state.config.value = initialState.config.value
        state.config.gameOrder = initialState.config.gameOrder
      }
    },
  },
})

export const { gameValue, gameItems, changeOrder, changeGameStatus } =
  gameConfigSlice.actions
export default gameConfigSlice.reducer
