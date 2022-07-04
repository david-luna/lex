export enum GameType {
  Words = 'words',
  Tale = 'tale',
  Fake = 'fake',
  HackWords = 'hack-words',
  HackSyllables = 'hack-syllables',
}

export enum Locale {
  ES = 'es-ES',
  CA = 'ca-ES',
  US = 'en-US',
}
export interface GameWords {
  type: GameType.Words;
  locale: Locale;
  description: string | string[];
  words: string[];
}
export interface GameTale {
  type: GameType.Tale;
  locale: Locale;
  description: string | string[];
  pages: { text: string; image: string }[];
}

export interface GameFake {
  type: GameType.Fake;
  locale: Locale;
  description: string | string[];
  pairs: [string, string, number][];
}

export interface GameHackWords {
  type: GameType.HackWords;
  locale: Locale;
  description: string | string[];
  sentences: string[];
}

export interface GameHackSyllables {
  type: GameType.HackSyllables;
  locale: Locale;
  description: string | string[];
  words: string[];
}

export type Game = GameWords | GameTale | GameFake | GameHackWords | GameHackSyllables;
