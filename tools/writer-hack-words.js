"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.HackWordsWriter = void 0;
var writer_1 = require("./writer");
var template = "\n<section>\n  <h2>{0}</h2>\n  {1}\n</section>\n";
var HackWordsWriter = /** @class */ (function (_super) {
    __extends(HackWordsWriter, _super);
    function HackWordsWriter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HackWordsWriter.prototype.write = function (game) {
        var _this = this;
        return game.sentences.reduce(function (result, sentence) {
            var words = sentence.split(' ');
            var joined = words.join('');
            var fragments = words.map(function (w) { return "<p class=\"fragment\">" + w + "</p>"; });
            return result + _this.format(template, joined, fragments.join(''));
        }, '');
    };
    return HackWordsWriter;
}(writer_1.Writer));
exports.HackWordsWriter = HackWordsWriter;
//# sourceMappingURL=writer-hack-words.js.map