import {createSlice} from '@reduxjs/toolkit'

const counter = createSlice({
  name: 'coutner',
  initialState: {count: 0},
  reducers: {
    add(state, action) {
      state.count += action.payload
    },
    dec(state, action) {
      state.count -= action.payload
    }
  }
})

export const {add, dec} = counter.actions
export default counter.reducer
