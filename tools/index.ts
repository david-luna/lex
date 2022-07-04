import { readdirSync, readFileSync, mkdirSync, writeFileSync } from 'fs';
import { GameType, Game } from './types';
import { WordsWriter } from './writer-words';
import { TaleWriter } from './writer-tale';
import { FakeWriter } from './writer-fake';
import { HackWordsWriter } from './writer-hack-words';
import { HackSyllablesWriter } from './writer-hack-syllables';

// TODO: maybe it will be usefull
const [_bin, _file, ...params] = process.argv;

const srcPath = `${__dirname}/../src`;
const distPath = `${__dirname}/../docs`;
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
  const { type, locale, description } = data;
  const meta = `data-type="${type}" data-locale="${locale}"`;
  let section = `<!-- No writer found for type ${data.type} -->`;

  if (writer && data.type !== GameType.HackSyllables) {
    section = `<section ${meta}>${writer.write(data as any)}</section>`
  }
  return sections + section;
}, '');

mkdirSync(distPath, { recursive: true });
writeFileSync(`${distPath}/index.html`, `${page.replace(marker, html)}`);