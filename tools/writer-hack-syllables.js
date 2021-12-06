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
exports.HackSyllablesWriter = void 0;
var writer_1 = require("./writer");
var template = "\n<section>\n  <h2>{0}</h2>\n  {1}\n</section>\n";
var HackSyllablesWriter = /** @class */ (function (_super) {
    __extends(HackSyllablesWriter, _super);
    function HackSyllablesWriter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HackSyllablesWriter.prototype.write = function (game) {
        var _this = this;
        return game.words.reduce(function (result, word) {
            var syllables = word.split(' ');
            var joined = syllables.join('');
            var fragments = syllables.map(function (s) { return "<p class=\"fragment\">" + s + "</p>"; });
            return result + _this.format(template, joined, fragments.join(''));
        }, '');
    };
    return HackSyllablesWriter;
}(writer_1.Writer));
exports.HackSyllablesWriter = HackSyllablesWriter;
//# sourceMappingURL=writer-hack-syllables.js.map