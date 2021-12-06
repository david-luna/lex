import { GameFake } from './types';
import { Writer } from './writer';
export declare class FakeWriter extends Writer<GameFake> {
    write(game: GameFake): string;
}
