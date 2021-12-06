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
exports.TaleWriter = void 0;
var writer_1 = require("./writer");
var template = "\n<section>\n  <p>{0}</p>\n</section>\n<section>\n  <img src=\"{1}\"/>\n</section>\n";
var TaleWriter = /** @class */ (function (_super) {
    __extends(TaleWriter, _super);
    function TaleWriter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaleWriter.prototype.write = function (game) {
        var _this = this;
        return game.pages.reduce(function (result, page) {
            return result + _this.format(template, page.text, page.image);
        }, '');
    };
    return TaleWriter;
}(writer_1.Writer));
exports.TaleWriter = TaleWriter;
//# sourceMappingURL=writer-tale.js.map