/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/solver-fake.ts":
/*!****************************!*\
  !*** ./src/solver-fake.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FakeSolver = void 0;
var solver_1 = __webpack_require__(/*! ./solver */ "./src/solver.ts");
var FakeSolver = /** @class */ (function (_super) {
    __extends(FakeSolver, _super);
    function FakeSolver($transcripts, successCallback, slide) {
        var _this = _super.call(this, $transcripts, successCallback) || this;
        _this.right = _this.getWord(slide, true);
        _this.wrong = _this.getWord(slide, false);
        return _this;
    }
    FakeSolver.prototype.processTranscript = function (word) {
        if (word.toLowerCase() === this.right) {
            this.successCallback();
        }
    };
    FakeSolver.prototype.getWord = function (slide, correct) {
        var paragraph = slide.querySelector("p[data-correct=\"" + correct + "\"]");
        return (paragraph === null || paragraph === void 0 ? void 0 : paragraph.innerText) || '';
    };
    return FakeSolver;
}(solver_1.Solver));
exports.FakeSolver = FakeSolver;


/***/ }),

/***/ "./src/solver-hack-words.ts":
/*!**********************************!*\
  !*** ./src/solver-hack-words.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HackWordsSolver = void 0;
var solver_1 = __webpack_require__(/*! ./solver */ "./src/solver.ts");
var HackWordsSolver = /** @class */ (function (_super) {
    __extends(HackWordsSolver, _super);
    function HackWordsSolver($transcripts, successCallback, slide) {
        var _this = _super.call(this, $transcripts, successCallback) || this;
        _this.words = Array.from(slide.querySelectorAll('p')).map(function (elem) { return elem.innerHTML; });
        return _this;
    }
    HackWordsSolver.prototype.processTranscript = function (word) {
        var nextWord = this.words[0];
        console.log('comparing', word, nextWord);
        if (word.toLowerCase() === nextWord.toLowerCase()) {
            this.words.shift();
            this.successCallback();
        }
        if (this.words.length === 0) {
            this.successCallback();
        }
    };
    return HackWordsSolver;
}(solver_1.Solver));
exports.HackWordsSolver = HackWordsSolver;


/***/ }),

/***/ "./src/solver-tale.ts":
/*!****************************!*\
  !*** ./src/solver-tale.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaleSolver = void 0;
var solver_1 = __webpack_require__(/*! ./solver */ "./src/solver.ts");
var TaleSolver = /** @class */ (function (_super) {
    __extends(TaleSolver, _super);
    function TaleSolver($transcripts, successCallback, slide) {
        var _this = _super.call(this, $transcripts, successCallback) || this;
        _this.words = Array.from(slide.querySelectorAll('span')).map(function (elem) { return elem.innerText; });
        console.log('tale', _this.words);
        return _this;
    }
    TaleSolver.prototype.processTranscript = function (word) {
        var nextWord = this.words[0];
        console.log('comparing', word, nextWord);
        if (word.toLowerCase() === nextWord.toLowerCase()) {
            this.words.shift();
            this.successCallback();
        }
        if (this.words.length === 0) {
            this.successCallback();
        }
    };
    return TaleSolver;
}(solver_1.Solver));
exports.TaleSolver = TaleSolver;


/***/ }),

/***/ "./src/solver-words.ts":
/*!*****************************!*\
  !*** ./src/solver-words.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WordsSolver = void 0;
var solver_1 = __webpack_require__(/*! ./solver */ "./src/solver.ts");
var WordsSolver = /** @class */ (function (_super) {
    __extends(WordsSolver, _super);
    function WordsSolver($transcripts, successCallback, slide) {
        var _a;
        var _this = _super.call(this, $transcripts, successCallback) || this;
        _this.word = ((_a = slide.querySelector('p')) === null || _a === void 0 ? void 0 : _a.innerText) || '';
        return _this;
    }
    WordsSolver.prototype.processTranscript = function (word) {
        if (word.toLowerCase() === this.word.toLowerCase()) {
            this.successCallback();
        }
    };
    return WordsSolver;
}(solver_1.Solver));
exports.WordsSolver = WordsSolver;


/***/ }),

/***/ "./src/solver.ts":
/*!***********************!*\
  !*** ./src/solver.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Solver = void 0;
var Solver = /** @class */ (function () {
    function Solver($transcripts, successCallback) {
        var _this = this;
        this.$transcripts = $transcripts;
        this.successCallback = successCallback;
        this.transcriptListener = function (event) {
            var detail = event.detail;
            _this.processTranscript(detail);
        };
        this.$transcripts.addEventListener('transcript', this.transcriptListener);
    }
    Solver.prototype.disconnect = function () {
        this.$transcripts.removeEventListener('transcript', this.transcriptListener);
    };
    return Solver;
}());
exports.Solver = Solver;


/***/ }),

/***/ "./src/speecher.ts":
/*!*************************!*\
  !*** ./src/speecher.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Speecher = void 0;
var Speecher = /** @class */ (function () {
    function Speecher(speech, options) {
        var _this = this;
        this.speech = speech;
        this.options = options;
        this.$events = new EventTarget();
        this.$errors = new EventTarget();
        this.resultHandler = function (evt) { return _this.handleResult(evt); };
        this.errorHandler = function (evt) { return _this.handleError(evt); };
        this.speech.addEventListener('result', this.resultHandler);
        this.speech.addEventListener('error', this.errorHandler);
        this.speech.continuous = true;
        this.speech.lang = options.locale;
        this.speech.start();
    }
    Speecher.prototype.handleResult = function (event) {
        var _this = this;
        var lastResult = event.results.item(event.results.length - 1);
        for (var i = 0; i < lastResult.length; i++) {
            var alternative = lastResult.item(i);
            alternative.transcript.split(' ')
                .filter(function (word) { return !!word; })
                .forEach(function (word) {
                console.log('heard', word);
                _this.$events.dispatchEvent(new CustomEvent('transcript', { detail: word }));
            });
        }
    };
    Speecher.prototype.handleError = function (event) {
        console.error('recognition error', event.name, event.error);
        this.$errors.dispatchEvent(new CustomEvent('error', { detail: event.error }));
    };
    Speecher.prototype.extractWords = function (text) {
        return text.split(' ').map(function (t) { return t.replace(/[^a-záàéèíóòúü]+/ig, ''); });
    };
    return Speecher;
}());
exports.Speecher = Speecher;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
/// <reference path="../node_modules/@types/reveal/index.d.ts" />
var speecher_1 = __webpack_require__(/*! ./speecher */ "./src/speecher.ts");
var solver_fake_1 = __webpack_require__(/*! ./solver-fake */ "./src/solver-fake.ts");
var solver_hack_words_1 = __webpack_require__(/*! ./solver-hack-words */ "./src/solver-hack-words.ts");
var solver_tale_1 = __webpack_require__(/*! ./solver-tale */ "./src/solver-tale.ts");
var solver_words_1 = __webpack_require__(/*! ./solver-words */ "./src/solver-words.ts");
var speecher;
var solver;
var nextSlide = function () {
    var routes = Reveal.availableRoutes();
    console.log('down', routes.down, 'right', routes.right);
    Reveal.next();
};
var processSlideEvent = function (event) {
    var slide = event.currentSlide;
    var parent = slide.parentElement;
    var locale = parent === null || parent === void 0 ? void 0 : parent.getAttribute('data-locale');
    var type = parent === null || parent === void 0 ? void 0 : parent.getAttribute('data-type');
    if (!speecher) {
        speecher = new speecher_1.Speecher(new webkitSpeechRecognition(), { locale: locale });
    }
    if (solver)
        solver.disconnect();
    switch (type) {
        case 'words':
            solver = new solver_words_1.WordsSolver(speecher.$events, nextSlide, slide);
            break;
        case 'tale':
            solver = new solver_tale_1.TaleSolver(speecher.$events, nextSlide, slide);
            break;
        case 'fake':
            solver = new solver_fake_1.FakeSolver(speecher.$events, nextSlide, slide);
            break;
        case 'hack-words':
            solver = new solver_hack_words_1.HackWordsSolver(speecher.$events, nextSlide, slide);
            break;
    }
};
// Wire up with reveal API
Reveal.addEventListener('slidechanged', processSlideEvent);
Reveal.addEventListener('ready', processSlideEvent);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c29sdmVyLWhhY2std29yZHMudHMiLCJ3ZWJwYWNrOi8vbGV4Ly4vc3JjL3NvbHZlci10YWxlLnRzIiwid2VicGFjazovL2xleC8uL3NyYy9zb2x2ZXItd29yZHMudHMiLCJ3ZWJwYWNrOi8vbGV4Ly4vc3JjL3NvbHZlci50cyIsIndlYnBhY2s6Ly9sZXgvLi9zcmMvc3BlZWNoZXIudHMiLCJ3ZWJwYWNrOi8vbGV4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xleC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTb2x2ZXIgfSBmcm9tICcuL3NvbHZlcic7XG5cbmV4cG9ydCBjbGFzcyBGYWtlU29sdmVyIGV4dGVuZHMgU29sdmVyIHtcbiAgcmlnaHQ6IHN0cmluZztcbiAgd3Jvbmc6IHN0cmluZztcbiAgY29uc3RydWN0b3IoXG4gICAgJHRyYW5zY3JpcHRzOiBFdmVudFRhcmdldCxcbiAgICBzdWNjZXNzQ2FsbGJhY2s6ICgpID0+IHZvaWQsXG4gICAgc2xpZGU6IEhUTUxFbGVtZW50LFxuICApIHtcbiAgICBzdXBlcigkdHJhbnNjcmlwdHMsIHN1Y2Nlc3NDYWxsYmFjayk7XG4gICAgdGhpcy5yaWdodCA9IHRoaXMuZ2V0V29yZChzbGlkZSwgdHJ1ZSk7XG4gICAgdGhpcy53cm9uZyA9IHRoaXMuZ2V0V29yZChzbGlkZSwgZmFsc2UpO1xuICB9XG5cbiAgcHJvY2Vzc1RyYW5zY3JpcHQod29yZDogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHdvcmQudG9Mb3dlckNhc2UoKSA9PT0gdGhpcy5yaWdodCkge1xuICAgICAgdGhpcy5zdWNjZXNzQ2FsbGJhY2soKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFdvcmQoc2xpZGU6IEhUTUxFbGVtZW50LCBjb3JyZWN0OiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBjb25zdCBwYXJhZ3JhcGggPSBzbGlkZS5xdWVyeVNlbGVjdG9yKGBwW2RhdGEtY29ycmVjdD1cIiR7Y29ycmVjdH1cIl1gKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcblxuICAgIHJldHVybiBwYXJhZ3JhcGg/LmlubmVyVGV4dCB8fCAnJztcbiAgfVxufSIsImltcG9ydCB7IFNvbHZlciB9IGZyb20gJy4vc29sdmVyJztcblxuZXhwb3J0IGNsYXNzIEhhY2tXb3Jkc1NvbHZlciBleHRlbmRzIFNvbHZlciB7XG4gIHdvcmRzOiBzdHJpbmdbXTtcbiAgY29uc3RydWN0b3IoXG4gICAgJHRyYW5zY3JpcHRzOiBFdmVudFRhcmdldCxcbiAgICBzdWNjZXNzQ2FsbGJhY2s6ICgpID0+IHZvaWQsXG4gICAgc2xpZGU6IEhUTUxFbGVtZW50LFxuICApIHtcbiAgICBzdXBlcigkdHJhbnNjcmlwdHMsIHN1Y2Nlc3NDYWxsYmFjayk7XG4gICAgdGhpcy53b3JkcyA9IEFycmF5LmZyb20oc2xpZGUucXVlcnlTZWxlY3RvckFsbCgncCcpKS5tYXAoZWxlbSA9PiBlbGVtLmlubmVySFRNTCk7XG4gIH1cblxuICBwcm9jZXNzVHJhbnNjcmlwdCh3b3JkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBuZXh0V29yZCA9IHRoaXMud29yZHNbMF07XG5cbiAgICBjb25zb2xlLmxvZygnY29tcGFyaW5nJywgd29yZCwgbmV4dFdvcmQpO1xuICAgIGlmICh3b3JkLnRvTG93ZXJDYXNlKCkgPT09IG5leHRXb3JkLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIHRoaXMud29yZHMuc2hpZnQoKTtcbiAgICAgIHRoaXMuc3VjY2Vzc0NhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMud29yZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnN1Y2Nlc3NDYWxsYmFjaygpO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCB7IFNvbHZlciB9IGZyb20gJy4vc29sdmVyJztcblxuZXhwb3J0IGNsYXNzIFRhbGVTb2x2ZXIgZXh0ZW5kcyBTb2x2ZXIge1xuICB3b3Jkczogc3RyaW5nW107XG4gIGNvbnN0cnVjdG9yKFxuICAgICR0cmFuc2NyaXB0czogRXZlbnRUYXJnZXQsXG4gICAgc3VjY2Vzc0NhbGxiYWNrOiAoKSA9PiB2b2lkLFxuICAgIHNsaWRlOiBIVE1MRWxlbWVudCxcbiAgKSB7XG4gICAgc3VwZXIoJHRyYW5zY3JpcHRzLCBzdWNjZXNzQ2FsbGJhY2spO1xuICAgIHRoaXMud29yZHMgPSBBcnJheS5mcm9tKHNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4nKSkubWFwKGVsZW0gPT4gZWxlbS5pbm5lclRleHQpO1xuICAgIGNvbnNvbGUubG9nKCd0YWxlJywgdGhpcy53b3Jkcyk7XG4gIH1cblxuICBwcm9jZXNzVHJhbnNjcmlwdCh3b3JkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBuZXh0V29yZCA9IHRoaXMud29yZHNbMF07XG5cbiAgICBjb25zb2xlLmxvZygnY29tcGFyaW5nJywgd29yZCwgbmV4dFdvcmQpO1xuICAgIGlmICh3b3JkLnRvTG93ZXJDYXNlKCkgPT09IG5leHRXb3JkLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIHRoaXMud29yZHMuc2hpZnQoKTtcbiAgICAgIHRoaXMuc3VjY2Vzc0NhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMud29yZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnN1Y2Nlc3NDYWxsYmFjaygpO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCB7IFNvbHZlciB9IGZyb20gJy4vc29sdmVyJztcblxuZXhwb3J0IGNsYXNzIFdvcmRzU29sdmVyIGV4dGVuZHMgU29sdmVyIHtcbiAgd29yZDogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihcbiAgICAkdHJhbnNjcmlwdHM6IEV2ZW50VGFyZ2V0LFxuICAgIHN1Y2Nlc3NDYWxsYmFjazogKCkgPT4gdm9pZCxcbiAgICBzbGlkZTogSFRNTEVsZW1lbnQsXG4gICkge1xuICAgIHN1cGVyKCR0cmFuc2NyaXB0cywgc3VjY2Vzc0NhbGxiYWNrKTtcbiAgICB0aGlzLndvcmQgPSBzbGlkZS5xdWVyeVNlbGVjdG9yKCdwJyk/LmlubmVyVGV4dCB8fCAnJztcbiAgfVxuXG4gIHByb2Nlc3NUcmFuc2NyaXB0KHdvcmQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh3b3JkLnRvTG93ZXJDYXNlKCkgPT09IHRoaXMud29yZC50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICB0aGlzLnN1Y2Nlc3NDYWxsYmFjaygpO1xuICAgIH1cbiAgfVxufSIsImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTb2x2ZXIge1xuICBwcml2YXRlIHRyYW5zY3JpcHRMaXN0ZW5lcjogRXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgZGV0YWlsIH0gPSAoZXZlbnQgYXMgYW55KTtcbiAgICB0aGlzLnByb2Nlc3NUcmFuc2NyaXB0KGRldGFpbCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgJHRyYW5zY3JpcHRzOiBFdmVudFRhcmdldCxcbiAgICBwcm90ZWN0ZWQgc3VjY2Vzc0NhbGxiYWNrOiAoKSA9PiB2b2lkLFxuICApIHtcbiAgICB0aGlzLiR0cmFuc2NyaXB0cy5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2NyaXB0JywgdGhpcy50cmFuc2NyaXB0TGlzdGVuZXIpO1xuICB9XG5cbiAgZGlzY29ubmVjdCgpOiB2b2lkIHtcbiAgICB0aGlzLiR0cmFuc2NyaXB0cy5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2NyaXB0JywgdGhpcy50cmFuc2NyaXB0TGlzdGVuZXIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IHByb2Nlc3NUcmFuc2NyaXB0KHdvcmQ6IHN0cmluZyk6IHZvaWQ7XG59XG4iLCJleHBvcnQgdHlwZSBTcGVlY2hMb2NhbGUgPSAnZW4tVVMnIHwgJ2VzLUVTJyB8ICdjYS1FUyc7XG5leHBvcnQgaW50ZXJmYWNlIFNwZWVjaE9wdGlvbnMge1xuICBsb2NhbGU6IFNwZWVjaExvY2FsZTtcbn1cblxuZXhwb3J0IGNsYXNzIFNwZWVjaGVyIHtcbiAgcHJpdmF0ZSByZXN1bHRIYW5kbGVyOiBhbnk7XG4gIHByaXZhdGUgZXJyb3JIYW5kbGVyOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzcGVlY2g6IFNwZWVjaFJlY29nbml0aW9uLFxuICAgIHByaXZhdGUgb3B0aW9uczogU3BlZWNoT3B0aW9ucyxcbiAgKSB7XG4gICAgdGhpcy5yZXN1bHRIYW5kbGVyID0gKGV2dDogU3BlZWNoUmVjb2duaXRpb25FdmVudCkgPT4gdGhpcy5oYW5kbGVSZXN1bHQoZXZ0KTtcbiAgICB0aGlzLmVycm9ySGFuZGxlciA9IChldnQ6IFNwZWVjaFN5bnRoZXNpc0Vycm9yRXZlbnQpID0+IHRoaXMuaGFuZGxlRXJyb3IoZXZ0KTtcbiAgICB0aGlzLnNwZWVjaC5hZGRFdmVudExpc3RlbmVyKCdyZXN1bHQnLCB0aGlzLnJlc3VsdEhhbmRsZXIpO1xuICAgIHRoaXMuc3BlZWNoLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJyAsIHRoaXMuZXJyb3JIYW5kbGVyKTtcbiAgICB0aGlzLnNwZWVjaC5jb250aW51b3VzID0gdHJ1ZTtcbiAgICB0aGlzLnNwZWVjaC5sYW5nID0gb3B0aW9ucy5sb2NhbGU7XG4gICAgdGhpcy5zcGVlY2guc3RhcnQoKTtcbiAgfVxuXG4gICRldmVudHMgPSBuZXcgRXZlbnRUYXJnZXQoKVxuICAkZXJyb3JzID0gbmV3IEV2ZW50VGFyZ2V0KClcblxuICBwcml2YXRlIGhhbmRsZVJlc3VsdChldmVudDogU3BlZWNoUmVjb2duaXRpb25FdmVudCkge1xuICAgIGNvbnN0IGxhc3RSZXN1bHQgPSBldmVudC5yZXN1bHRzLml0ZW0oZXZlbnQucmVzdWx0cy5sZW5ndGggLSAxKTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhc3RSZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGFsdGVybmF0aXZlID0gbGFzdFJlc3VsdC5pdGVtKGkpO1xuXG4gICAgICBhbHRlcm5hdGl2ZS50cmFuc2NyaXB0LnNwbGl0KCcgJylcbiAgICAgIC5maWx0ZXIoKHdvcmQpID0+ICEhd29yZClcbiAgICAgIC5mb3JFYWNoKCh3b3JkKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoZWFyZCcsIHdvcmQpO1xuICAgICAgICB0aGlzLiRldmVudHMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3RyYW5zY3JpcHQnLCB7IGRldGFpbDogd29yZCB9KSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXZlbnQ6IFNwZWVjaFN5bnRoZXNpc0Vycm9yRXZlbnQpIHtcbiAgICBjb25zb2xlLmVycm9yKCdyZWNvZ25pdGlvbiBlcnJvcicsIGV2ZW50Lm5hbWUsIGV2ZW50LmVycm9yKTtcbiAgICB0aGlzLiRlcnJvcnMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2Vycm9yJywgeyBkZXRhaWw6IGV2ZW50LmVycm9yIH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdFdvcmRzKHRleHQ6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGV4dC5zcGxpdCgnICcpLm1hcCh0ID0+IHQucmVwbGFjZSgvW15hLXrDocOgw6nDqMOtw7PDssO6w7xdKy9pZywgJycpKTtcbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9yZXZlYWwvaW5kZXguZC50c1wiIC8+XG5pbXBvcnQgeyBTcGVlY2hlciwgU3BlZWNoTG9jYWxlIH0gZnJvbSAnLi9zcGVlY2hlcic7XG5pbXBvcnQgeyBTb2x2ZXIgfSBmcm9tICcuL3NvbHZlcic7XG5pbXBvcnQgeyBGYWtlU29sdmVyIH0gZnJvbSAnLi9zb2x2ZXItZmFrZSc7XG5pbXBvcnQgeyBIYWNrV29yZHNTb2x2ZXIgfSBmcm9tICcuL3NvbHZlci1oYWNrLXdvcmRzJztcbmltcG9ydCB7IFRhbGVTb2x2ZXIgfSBmcm9tICcuL3NvbHZlci10YWxlJztcbmltcG9ydCB7IFdvcmRzU29sdmVyIH0gZnJvbSAnLi9zb2x2ZXItd29yZHMnO1xuXG5pbnRlcmZhY2UgUmV2ZWFsRXZlbnQge1xuICBjdXJyZW50U2xpZGU6IEhUTUxFbGVtZW50O1xufVxuaW50ZXJmYWNlIFJldmVhbFJvdXRlcyB7XG4gIGRvd246IGJvb2xlYW47XG4gIGxlZnQ6IGJvb2xlYW47XG4gIHJpZ2h0OiBib29sZWFuO1xuICB1cDogYm9vbGVhbjtcbn1cblxuZGVjbGFyZSBsZXQgd2Via2l0U3BlZWNoUmVjb2duaXRpb246IHtcbiAgbmV3ICgpOiBTcGVlY2hSZWNvZ25pdGlvbjtcbn07XG5cbmxldCBzcGVlY2hlcjogU3BlZWNoZXI7XG5sZXQgc29sdmVyOiBTb2x2ZXI7XG5cbmNvbnN0IG5leHRTbGlkZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVzID0gKFJldmVhbCBhcyBhbnkpLmF2YWlsYWJsZVJvdXRlcygpIGFzIFJldmVhbFJvdXRlcztcbiAgY29uc29sZS5sb2coJ2Rvd24nLCByb3V0ZXMuZG93biwgJ3JpZ2h0Jywgcm91dGVzLnJpZ2h0KTtcbiAgUmV2ZWFsLm5leHQoKTtcbn1cblxuY29uc3QgcHJvY2Vzc1NsaWRlRXZlbnQgPSAoZXZlbnQ6IFJldmVhbEV2ZW50KSA9PiB7XG4gIGNvbnN0IHNsaWRlID0gZXZlbnQuY3VycmVudFNsaWRlO1xuICBjb25zdCBwYXJlbnQgPSBzbGlkZS5wYXJlbnRFbGVtZW50O1xuICBjb25zdCBsb2NhbGUgPSBwYXJlbnQ/LmdldEF0dHJpYnV0ZSgnZGF0YS1sb2NhbGUnKSBhcyBTcGVlY2hMb2NhbGU7XG4gIGNvbnN0IHR5cGUgPSBwYXJlbnQ/LmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJyk7XG5cbiAgaWYgKCFzcGVlY2hlcikge1xuICAgIHNwZWVjaGVyID0gbmV3IFNwZWVjaGVyKG5ldyB3ZWJraXRTcGVlY2hSZWNvZ25pdGlvbigpLCB7IGxvY2FsZSB9KTtcbiAgfVxuXG4gIGlmIChzb2x2ZXIpIHNvbHZlci5kaXNjb25uZWN0KCk7XG5cbiAgc3dpdGNoKHR5cGUpIHtcbiAgICBjYXNlICd3b3Jkcyc6XG4gICAgICBzb2x2ZXIgPSBuZXcgV29yZHNTb2x2ZXIoc3BlZWNoZXIuJGV2ZW50cywgbmV4dFNsaWRlLCBzbGlkZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd0YWxlJzpcbiAgICAgIHNvbHZlciA9IG5ldyBUYWxlU29sdmVyKHNwZWVjaGVyLiRldmVudHMsIG5leHRTbGlkZSwgc2xpZGUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZmFrZSc6XG4gICAgICBzb2x2ZXIgPSBuZXcgRmFrZVNvbHZlcihzcGVlY2hlci4kZXZlbnRzLCBuZXh0U2xpZGUsIHNsaWRlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2hhY2std29yZHMnOlxuICAgICAgc29sdmVyID0gbmV3IEhhY2tXb3Jkc1NvbHZlcihzcGVlY2hlci4kZXZlbnRzLCBuZXh0U2xpZGUsIHNsaWRlKTtcbiAgICAgIGJyZWFrO1xuICB9XG59O1xuXG5cblxuLy8gV2lyZSB1cCB3aXRoIHJldmVhbCBBUElcblJldmVhbC5hZGRFdmVudExpc3RlbmVyKCdzbGlkZWNoYW5nZWQnLCBwcm9jZXNzU2xpZGVFdmVudCk7XG5SZXZlYWwuYWRkRXZlbnRMaXN0ZW5lcigncmVhZHknLCBwcm9jZXNzU2xpZGVFdmVudCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=