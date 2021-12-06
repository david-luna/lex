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
exports.WordsWriter = void 0;
var writer_1 = require("./writer");
var html = "\n<section>\n  <p>{0}</p>\n</section>\n";
var WordsWriter = /** @class */ (function (_super) {
    __extends(WordsWriter, _super);
    function WordsWriter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WordsWriter.prototype.write = function (game) {
        var _this = this;
        return game.words.reduce(function (result, word) {
            return result + _this.format(html, word);
        }, '');
    };
    return WordsWriter;
}(writer_1.Writer));
exports.WordsWriter = WordsWriter;
//# sourceMappingURL=writer-word.js.map