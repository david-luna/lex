export abstract class Solver {
  constructor(
    protected $transcripts: EventTarget,
    protected successCallback: () => void,
  ) {
    this.$transcripts.addEventListener('transcript', (event) => {
      const { detail } = (event as any);
      this.processTranscript(detail);
    });
  }

  abstract processTranscript(word: string): void;
}
