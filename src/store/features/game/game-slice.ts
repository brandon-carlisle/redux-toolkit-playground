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
    adjustScore(
      state,
      action: PayloadAction<{ value: number; case: 'INCREMENT' | 'DECREMENT' }>
    ) {
      switch (action.payload.case) {
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

export const { adjustScore } = gameSlice.actions;
export default gameSlice.reducer;
