export type SpeechLocale = 'en-US' | 'es-ES' | 'ca-ES';
export interface SpeechOptions {
  locale: SpeechLocale;
}

export class Speecher {
  private resultHandler: any;
  private errorHandler: any;

  constructor(
    private speech: SpeechRecognition,
    private options: SpeechOptions,
  ) {
    this.resultHandler = (evt: SpeechRecognitionEvent) => this.handleResult(evt);
    this.errorHandler = (evt: SpeechSynthesisErrorEvent) => this.handleError(evt);
    this.speech.addEventListener('result', this.resultHandler);
    this.speech.addEventListener('error' , this.errorHandler);
    this.speech.continuous = true;
    this.speech.lang = options.locale;
    this.speech.start();
  }

  $events = new EventTarget()
  $errors = new EventTarget()

  private handleResult(event: SpeechRecognitionEvent) {
    const lastResult = event.results.item(event.results.length - 1);
    
    for (let i = 0; i < lastResult.length; i++) {
      const alternative = lastResult.item(i);

      alternative.transcript.split(' ')
      .filter((word) => !!word)
      .forEach((word) => {
        console.log('heard', word);
        this.$events.dispatchEvent(new CustomEvent('transcript', { detail: word }));
      });
    }

  }

  private handleError(event: SpeechSynthesisErrorEvent) {
    console.error('recognition error', event.name, event.error);
    this.$errors.dispatchEvent(new CustomEvent('error', { detail: event.error }));
  }

  private extractWords(text: string): string[] {
    return text.split(' ').map(t => t.replace(/[^a-záàéèíóòúü]+/ig, ''));
  }
}