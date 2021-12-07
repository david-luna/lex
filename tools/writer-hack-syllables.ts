import { GameHackSyllables } from './types';
import { Writer } from './writer';

const template = `
<section>
  <h2>{0}</h2>
  {1}
</section>
`;

export class HackSyllablesWriter extends Writer<GameHackSyllables> {
  write(game: GameHackSyllables): string {
    
    return game.words.reduce((result, word) => {
      const syllables = word.split(' ');
      const joined = syllables.join('');
      const fragments = syllables.map(s => `<p class="fragment">${s}</p>`);
      
      return result + this.format(template, joined, fragments.join(''));
    }, '');
  }
}