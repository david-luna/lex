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
exports.FakeWriter = void 0;
var writer_1 = require("./writer");
var template = "\n<section>\n  <p data-correct=\"{0}\">{1}</p>\n  <p data-correct=\"{2}\">{3}</p>\n</section>\n";
var FakeWriter = /** @class */ (function (_super) {
    __extends(FakeWriter, _super);
    function FakeWriter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FakeWriter.prototype.write = function (game) {
        var _this = this;
        return game.pairs.reduce(function (result, pair) {
            var isFirst = pair[2] === 0;
            return result + _this.format(template, isFirst, pair[0], !isFirst, pair[1]);
        }, '');
    };
    return FakeWriter;
}(writer_1.Writer));
exports.FakeWriter = FakeWriter;
//# sourceMappingURL=writer-fake.js.map