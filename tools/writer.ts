import { Game } from './types';

export abstract class Writer<T extends Game> {
  abstract write(game: T): string;

  protected format (str: string, ...vals: unknown[]): string {
    return vals.reduce(
      (s: string, v: any, i: number) => s.replace(new RegExp('\\{' + i + '\\}', 'g'), `${v}`),
      str
    );
  }
}