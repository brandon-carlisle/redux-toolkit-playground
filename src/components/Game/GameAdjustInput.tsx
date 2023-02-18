import { useState } from 'react';
import { adjustScore } from '../../store/features/game/game-slice';
import { useAppDispatch } from '../../store/hooks';

function GameAdjustInput() {
  const [scoreInput, setScoreInput] = useState<number>(0);
  const dispatch = useAppDispatch();

  function handleAdjustScore(type: 'INCREMENT' | 'DECREMENT') {
    dispatch(adjustScore({ value: scoreInput, case: type }));
  }

  return (
    <form className="input-group input-group-vertical">
      <input
        type="number"
        className="input-primary input"
        value={scoreInput}
        onChange={(e) => setScoreInput(parseInt(e.currentTarget.value))}
      />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => handleAdjustScore('INCREMENT')}
      >
        Increment
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => handleAdjustScore('DECREMENT')}
      >
        Decrement
      </button>
    </form>
  );
}
export default GameAdjustInput;
