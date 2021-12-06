import { GameTale } from './types';
import { Writer } from './writer';
export declare class TaleWriter extends Writer<GameTale> {
    write(game: GameTale): string;
}
