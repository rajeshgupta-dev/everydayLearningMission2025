import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
  count: 0
};

const counterSlicer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    INC: (state) => { state.count += 1 },
    DEC: (state) => { state.count -= 1 }
  }

});

export const { INC, DEC } = counterSlicer.actions;
export default counterSlicer.reducer

