import { Solver } from './solver';

export class TaleSolver extends Solver {
  words: string[];
  constructor(
    $transcripts: EventTarget,
    successCallback: () => void,
    slide: HTMLElement,
  ) {
    super($transcripts, successCallback);
    this.words = Array.from(slide.querySelectorAll('span')).map(span => span.innerText);
    console.log('tale', this.words);
  }

  processTranscript(word: string): void {
    const nextWord = this.words[0];

    console.log('comparing', word, nextWord);
    if (word.toLowerCase() === nextWord.toLowerCase()) {
      this.words.shift();
      this.successCallback();
    }
  }
}