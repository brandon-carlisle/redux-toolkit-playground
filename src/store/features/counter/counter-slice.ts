import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementBy(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    reset(state) {
      state.value = initialState.value;
    },
  },
});

export const { increment, decrement, incrementBy, reset } =
  counterSlice.actions;
export default counterSlice.reducer;
