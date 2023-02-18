import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface GameState {
  score: number;
}

const initialState: GameState = {
  score: 0,
};

const gameSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    setScore(
      state,
      action: PayloadAction<{ value: number; type: 'INCREMENT' | 'DECREMENT' }>
    ) {
      switch (action.payload.type) {
        case 'INCREMENT':
          state.score += action.payload.value;
          break;
        case 'DECREMENT':
          state.score -= action.payload.value;
          break;
      }
    },
  },
});

export const { setScore } = gameSlice.actions;
export default gameSlice.reducer;
