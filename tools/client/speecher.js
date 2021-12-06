"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Speecher = void 0;
var Speecher = /** @class */ (function () {
    function Speecher(speech) {
        var _this = this;
        this.speech = speech;
        this.resultHandler = function (evt) { return _this.handleResult(evt); };
        this.errorHandler = function (evt) { return _this.handleError(evt); };
        this.speech.addEventListener('result', this.resultHandler);
        this.speech.addEventListener('error', this.errorHandler);
        this.speech.continuous = true;
    }
    // async init(url: string): Promise<void> {
    //   this.tale = await fetch(url).then(r => r.json()) as Tale;
    //   this.tale.pages.forEach(p => p.words = this.extractWords(p.text));
    //   this.writer.write(this.tale);
    //   this.speech.lang = this.tale.locale;
    //   this.speech.start();
    // }
    Speecher.prototype.handleResult = function (event) {
        var lastResult = event.results.item(event.results.length - 1);
        for (var i = 0; i < lastResult.length; i++) {
            var alternative = lastResult.item(i);
            alternative.transcript.split(' ').forEach(function (w) { return console.log(w); });
        }
    };
    Speecher.prototype.handleError = function (event) {
        console.log('recognition error', event.name, event.error);
    };
    Speecher.prototype.extractWords = function (text) {
        return text.split(' ').map(function (t) { return t.replace(/[^a-záàéèíóòúü]+/ig, ''); });
    };
    return Speecher;
}());
exports.Speecher = Speecher;
//# sourceMappingURL=speecher.js.map