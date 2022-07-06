import { Solver } from './solver';

export class TaleSolver extends Solver {
  words: string[];
  image: string;

  constructor(
    $transcripts: EventTarget,
    successCallback: () => void,
    slide: HTMLElement,
  ) {
    super($transcripts, successCallback);
    this.image = slide.getAttribute('data-background-image') || '';
    this.words = Array.from(slide.querySelectorAll('span')).map(elem => elem.innerText);

    if (this.image !== '') {
      setTimeout(successCallback, 5000);
    }
  }

  processTranscript(word: string): void {
    const nextWord = this.words[0];

    if (word.toLowerCase() === nextWord.toLowerCase()) {
      this.words.shift();
      this.successCallback();
    }

    if (this.words.length === 0) {
      this.successCallback();
    }
  }
}