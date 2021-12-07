import { GameTale } from './types';
import { Writer } from './writer';

const template = `
<section>
  <p>{0}</p>
</section>
<section>
  <img src="{1}"/>
</section>
`;

export class TaleWriter extends Writer<GameTale> {
  write(game: GameTale): string {
    return game.pages.reduce((result, page) => {
      return result + this.format(template, page.text, page.image);
    }, '');
  }
}