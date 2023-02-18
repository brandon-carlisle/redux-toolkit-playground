import { FormEvent, useState } from 'react';
import { adjustScore } from '../../store/features/game/game-slice';
import { useAppDispatch } from '../../store/hooks';

function GameQuestion() {
  const [inputText, setInputText] = useState<string>('');
  const dispatch = useAppDispatch();

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (inputText.toLowerCase().includes('hey')) {
      dispatch(adjustScore({ case: 'INCREMENT', value: 20 }));
    } else {
      dispatch(adjustScore({ case: 'DECREMENT', value: 5 }));
    }
  }

  return (
    <>
      <h3>Question</h3>

      <form
        className="input-group input-group-vertical"
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <label htmlFor="question" className="label label-text">
          What is the name of this stadium?
        </label>

        <img
          src="https://images.unsplash.com/photo-1610201417828-29dd1173d62f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
          className="image-full mb-4"
        />

        <input
          type="text"
          className="input input-primary"
          value={inputText}
          onChange={(e) => setInputText(e.currentTarget.value)}
        />
      </form>
    </>
  );
}
export default GameQuestion;
