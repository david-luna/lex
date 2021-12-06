"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var types_1 = require("./types");
var writer_word_1 = require("./writer-word");
var writer_tale_1 = require("./writer-tale");
var writer_fake_1 = require("./writer-fake");
var writer_hack_words_1 = require("./writer-hack-words");
var writer_hack_syllables_1 = require("./writer-hack-syllables");
// TODO: maybe it will be usefull
var _b = process.argv, _bin = _b[0], _file = _b[1], params = _b.slice(2);
var templatePath = __dirname + "/../template";
var buildPath = __dirname + "/../build";
var gamePath = __dirname + "/../games";
var gamePaths = fs_1.readdirSync(gamePath).map(function (name) { return gamePath + "/" + name; });
var writers = (_a = {},
    _a[types_1.GameType.Words] = new writer_word_1.WordsWriter(),
    _a[types_1.GameType.Tale] = new writer_tale_1.TaleWriter(),
    _a[types_1.GameType.Fake] = new writer_fake_1.FakeWriter(),
    _a[types_1.GameType.HackSyllables] = new writer_hack_syllables_1.HackSyllablesWriter(),
    _a[types_1.GameType.HackWords] = new writer_hack_words_1.HackWordsWriter(),
    _a);
var marker = '<!-- content -->';
var page = fs_1.readFileSync(templatePath + "/index.html", { encoding: 'utf-8' });
var html = gamePaths.reduce(function (sections, path) {
    var data = JSON.parse(fs_1.readFileSync(path, { encoding: 'utf-8' }));
    var writer = writers[data.type];
    var section = "<!-- No writer found for type " + data.type + " -->";
    if (writer) {
        section = "<section>" + writer.write(data) + "</section>";
    }
    return sections + section;
}, '');
fs_1.mkdirSync(buildPath, { recursive: true });
fs_1.writeFileSync(buildPath + "/index.html", "" + page.replace(marker, html));
//# sourceMappingURL=index.js.map