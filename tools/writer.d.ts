import { Game } from './types';
export declare abstract class Writer<T extends Game> {
    abstract write(game: T): string;
    protected format(str: string, ...vals: unknown[]): string;
}
