"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Writer = void 0;
var Writer = /** @class */ (function () {
    function Writer() {
    }
    Writer.prototype.format = function (str) {
        var vals = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            vals[_i - 1] = arguments[_i];
        }
        return vals.reduce(function (s, v, i) { return s.replace(new RegExp('\\{' + i + '\\}', 'g'), "" + v); }, str);
    };
    return Writer;
}());
exports.Writer = Writer;
//# sourceMappingURL=writer.js.map