import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameState {
  score: number;
}

const initialState: GameState = {
  score: 0,
};

const gameSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeScore(state, action: PayloadAction<number>) {
      switch (action.type) {
        case 'INCREMENT':
          state.score += action.payload;
          break;
        case 'DECREMENT':
          state.score--;
      }
    },
  },
});

export const { changeScore } = gameSlice.actions;
export default gameSlice.reducer;
