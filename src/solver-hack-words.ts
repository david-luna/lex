import { Solver } from './solver';

export class HackWordsSolver extends Solver {
  words: string[];
  constructor(
    $transcripts: EventTarget,
    successCallback: () => void,
    slide: HTMLElement,
  ) {
    super($transcripts, successCallback);
    this.words = Array.from(slide.querySelectorAll('p')).map(elem => elem.innerHTML);
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