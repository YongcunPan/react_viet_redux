import { createSlice } from "@reduxjs/toolkit";

const initState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    handleAdd(state) {
      state.value++;
    },
    handleAdd2(state, action) {
      console.log(action);
      state.value += action.payload;
    },
  },
});
export const { handleAdd, handleAdd2 } = counterSlice.actions;
export default counterSlice.reducer;
