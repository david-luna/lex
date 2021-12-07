
export class Speecher {
  private resultHandler: any;
  private errorHandler: any;
  

  constructor(
    private speech: SpeechRecognition,
  ) {
    this.resultHandler = (evt: SpeechRecognitionEvent) => this.handleResult(evt);
    this.errorHandler = (evt: SpeechSynthesisErrorEvent) => this.handleError(evt);
    this.speech.addEventListener('result', this.resultHandler);
    this.speech.addEventListener('error' , this.errorHandler);
    this.speech.continuous = true;
    this.speech.lang = 'en-US';
    this.speech.start();
  }

  private handleResult(event: SpeechRecognitionEvent) {
    const lastResult = event.results.item(event.results.length - 1);
    
    for (let i = 0; i < lastResult.length; i++) {
      const alternative = lastResult.item(i);

      alternative.transcript.split(' ').forEach((w) => console.log(w));
    }

  }

  private handleError(event: SpeechSynthesisErrorEvent) {
    console.log('recognition error', event.name, event.error);
  }

  private extractWords(text: string): string[] {
    return text.split(' ').map(t => t.replace(/[^a-záàéèíóòúü]+/ig, ''));
  }
}