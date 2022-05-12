import { Solver } from './solver';

export class FakeSolver extends Solver {
  right: string;
  wrong: string;
  constructor(
    $transcripts: EventTarget,
    successCallback: () => void,
    slide: HTMLElement,
  ) {
    super($transcripts, successCallback);
    this.right = this.getWord(slide, true);
    this.wrong = this.getWord(slide, false);
  }

  processTranscript(word: string): void {
    if (word.toLowerCase() === this.right) {
      this.successCallback();
    }
  }

  private getWord(slide: HTMLElement, correct: boolean): string {
    const selector = `p[data-correct="${correct}"]`;
    const paragraph = slide.querySelector(selector) as HTMLParagraphElement;

    return paragraph?.innerText || '';
  }
}