export abstract class Solver {
  private transcriptListener: EventListener = (event) => {
    const { detail } = (event as any);
    this.processTranscript(detail);
  }

  constructor(
    protected $transcripts: EventTarget,
    protected successCallback: () => void,
  ) {
    this.$transcripts.addEventListener('transcript', this.transcriptListener);
  }

  disconnect(): void {
    this.$transcripts.removeEventListener('transcript', this.transcriptListener);
  }

  protected abstract processTranscript(word: string): void;
}
