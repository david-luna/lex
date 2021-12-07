import { GameFake } from './types';
import { Writer } from './writer';

const template = `
<section>
  <p data-correct="{0}">{1}</p>
  <p data-correct="{2}">{3}</p>
</section>
`;

export class FakeWriter extends Writer<GameFake> {
  write(game: GameFake): string {
    return game.pairs.reduce((result, pair) => {
      const isFirst = pair[2] === 0;
      return result + this.format(template, isFirst, pair[0], !isFirst, pair[1]);
    }, '');
  }
}