import { GameTale } from './types';
import { Writer } from './writer';

const spanTemplate = `<span class="fragment highlight-red">{0}</span>`;
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
      const words = this.extractWords(page.text)
      const spans = words.map(word => this.format(spanTemplate, word)).join(' ');
      return result + this.format(template, spans, page.image);
    }, '');
  }

  private extractWords(text: string): string[] {
    return text.split(' ').map(t => t.replace(/[^a-záàéèíóòúü]+/ig, ''));
  }
}