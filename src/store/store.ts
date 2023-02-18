import { AnyAction, configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counter-slice';
import gameReducer from './features/game/game-slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    game: gameReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
