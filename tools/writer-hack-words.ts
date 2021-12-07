import { GameHackWords } from './types';
import { Writer } from './writer';

const template = `
<section>
  <h2>{0}</h2>
  {1}
</section>
`;

export class HackWordsWriter extends Writer<GameHackWords> {
  write(game: GameHackWords): string {
    
    return game.sentences.reduce((result, sentence) => {
      const words = sentence.split(' ');
      const joined = words.join('');
      const fragments = words.map(w => `<p class="fragment">${w}</p>`);

      return result + this.format(template, joined, fragments.join(''));
    }, '');
  }
}