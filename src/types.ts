export interface Page {
  text: string;
  words?: string[];
  image: string;
}

export interface Tale {
  title: string;
  locale: string;
  pages: Page[];
}

export interface Shelf {
  name: string;
  tales: Tale[];
}

export interface Writer {
  write(tale: Tale): void;
}