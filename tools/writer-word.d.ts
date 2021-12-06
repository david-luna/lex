import { GameWords } from './types';
import { Writer } from './writer';
export declare class WordsWriter extends Writer<GameWords> {
    write(game: GameWords): string;
}
