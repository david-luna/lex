export declare enum GameType {
    Words = "words",
    Tale = "tale",
    Fake = "fake",
    HackWords = "hack-words",
    HackSyllables = "hack-syllables"
}
export declare enum Locale {
    ES = "es-ES",
    CA = "ca-ES",
    US = "en-US"
}
export interface GameWords {
    type: GameType.Words;
    locale: Locale;
    words: string[];
}
export interface GameTale {
    type: GameType.Tale;
    locale: Locale;
    pages: {
        text: string;
        image: string;
    }[];
}
export interface GameFake {
    type: GameType.Fake;
    locale: Locale;
    pairs: [string, string, number][];
}
export interface GameHackWords {
    type: GameType.HackWords;
    locale: Locale;
    sentences: string[];
}
export interface GameHackSyllables {
    type: GameType.HackSyllables;
    locale: Locale;
    words: string[];
}
export declare type Game = GameWords | GameTale | GameFake | GameHackWords | GameHackSyllables;
