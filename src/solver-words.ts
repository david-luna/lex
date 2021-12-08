import { Solver } from './solver';

export class WordsSolver extends Solver {
  word: string;
  constructor(
    $transcripts: EventTarget,
    successCallback: () => void,
    slide: HTMLElement,
  ) {
    super($transcripts, successCallback);
    this.word = slide.querySelector('p')?.innerText || '';
  }

  processTranscript(word: string): void {
    if (word.toLowerCase() === this.word.toLowerCase()) {
      this.successCallback();
    }
  }
}