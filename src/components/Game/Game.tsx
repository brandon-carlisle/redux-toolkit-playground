import { useAppSelector } from '../../store/hooks';
import Section from '../Section';
import GameAdjustInput from './GameAdjustInput';
import GameQuestion from './GameQuestion';

function Game() {
  const score = useAppSelector((state) => state.game.score);

  return (
    <Section>
      <h2 className="text-2xl mb-8">game-slice</h2>

      <div className="flex gap-3 mb-5 flex-wrap items-center justify-center">
        <GameAdjustInput />
        <GameQuestion />
      </div>

      <p className="uppercase text-2xl">
        Score is <span className="font-semibold text-secondary">{score}</span>
      </p>
    </Section>
  );
}
export default Game;
