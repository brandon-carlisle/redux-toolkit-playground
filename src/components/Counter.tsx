import {
  decrement,
  increment,
  incrementBy,
  reset,
} from '../store/features/counter/counter-slice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import Section from './Section';

function Counter() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  function handleIncrement() {
    dispatch(increment());
  }
  function handleDecrement() {
    dispatch(decrement());
  }
  function handleIncrementBy() {
    dispatch(incrementBy(10));
  }
  function handleReset() {
    dispatch(reset());
  }

  return (
    <Section>
      <h2 className="text-2xl mb-8">counter-slice</h2>

      <div className="flex gap-3 mb-5 flex-wrap items-center justify-center">
        <button className="btn btn-primary" onClick={handleIncrement}>
          Increment
        </button>
        <button className="btn btn-primary" onClick={handleDecrement}>
          Decrement
        </button>
        <button className="btn btn-primary" onClick={handleIncrementBy}>
          Increment by 10
        </button>
        <button className="btn btn-primary" onClick={handleReset}>
          Reset to inital
        </button>
      </div>

      <p className="uppercase text-2xl">
        Count is <span className="font-semibold text-secondary">{count}</span>
      </p>
    </Section>
  );
}
export default Counter;
