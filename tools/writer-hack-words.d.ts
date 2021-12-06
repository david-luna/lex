import { GameHackWords } from './types';
import { Writer } from './writer';
export declare class HackWordsWriter extends Writer<GameHackWords> {
    write(game: GameHackWords): string;
}
