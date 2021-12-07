import { readdirSync, readFileSync, mkdirSync, writeFileSync } from 'fs';
import { GameType, Game } from './types';
import { WordsWriter } from './writer-word';
import { TaleWriter } from './writer-tale';
import { FakeWriter } from './writer-fake';
import { HackWordsWriter } from './writer-hack-words';
import { HackSyllablesWriter } from './writer-hack-syllables';

// TODO: maybe it will be usefull
const [_bin, _file, ...params] = process.argv;

const srcPath = `${__dirname}/../src`;
const distPath = `${__dirname}/../dist`;
const gamePath = `${__dirname}/../games`;
const gamePaths = readdirSync(gamePath).map((name) => `${gamePath}/${name}`);
const writers = {
  [GameType.Words]: new WordsWriter(),
  [GameType.Tale]: new TaleWriter(),
  [GameType.Fake]: new FakeWriter(),
  [GameType.HackSyllables]: new HackSyllablesWriter(),
  [GameType.HackWords]: new HackWordsWriter(),
}

const marker = '<!-- content -->';
const page = readFileSync(`${srcPath}/index.html`, { encoding: 'utf-8' });
const html = gamePaths.reduce((sections, path) => {
  const data = JSON.parse(readFileSync(path, { encoding: 'utf-8' })) as Game;
  const writer = writers[data.type];
  let section = `<!-- No writer found for type ${data.type} -->`;

  if (writer) {
    section = `<section>${writer.write(data as any)}</section>`
  }
  return sections + section;
}, '');

mkdirSync(distPath, { recursive: true });
writeFileSync(`${distPath}/index.html`, `${page.replace(marker, html)}`);