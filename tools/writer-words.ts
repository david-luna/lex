import { GameWords } from './types';
import { Writer } from './writer';

const html = `
<section>
  <p data-word>{0}</p>
</section>
`;

export class WordsWriter extends Writer<GameWords> {
  write(game: GameWords): string {
    return game.words.reduce((result, word) => {
      return result + this.format(html, word)
    }, '');
  }
}