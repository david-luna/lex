export declare class Speecher {
    private speech;
    private resultHandler;
    private errorHandler;
    constructor(speech: SpeechRecognition);
    private handleResult;
    private handleError;
    private extractWords;
}
