import { useState } from 'react';
import { setScore } from '../store/features/game/game-slice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import Section from './Section';

function Game() {
  const dispatch = useAppDispatch();
  const score = useAppSelector((state) => state.game.score);
  const [scoreInput, setScoreInput] = useState<number>(0);

  function handleSetScore(type: 'INCREMENT' | 'DECREMENT') {
    dispatch(setScore({ value: scoreInput, type }));
  }

  return (
    <Section>
      <h2 className="text-2xl mb-8">game-slice</h2>

      <div className="flex gap-3 mb-5 flex-wrap items-center justify-center">
        <form className="input-group">
          <input
            type="number"
            className="input-primary input"
            value={scoreInput}
            onChange={(e) => setScoreInput(parseInt(e.currentTarget.value))}
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleSetScore('INCREMENT')}
          >
            Increment
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => handleSetScore('DECREMENT')}
          >
            Decrement
          </button>
        </form>

        <h3>Question</h3>

        <form className="input-group input-group-vertical">
          <label htmlFor="question" className="label">
            What is the name of this stadium?
          </label>

          <img
            src="https://images.unsplash.com/photo-1610201417828-29dd1173d62f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
            className="p-4"
          />

          <input type="text" className="input input-primary" />
        </form>
      </div>

      <p className="uppercase text-2xl">
        Score is <span className="font-semibold text-secondary">{score}</span>
      </p>
    </Section>
  );
}
export default Game;
