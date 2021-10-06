import { Page, Tale, Writer } from "./types";

const createElement = (tag: string): Element => document.createElement(tag);

export class RevealWriter implements Writer {
  constructor(private elem: Element) {}

  write(tale: Tale) {
    const reveal_window = window as any;
    const reveal = new reveal_window.Reveal();

    tale.pages.forEach((page, index) => this.writePage(page, index));
    reveal.initialize();
  }

  mark(pageNum: number, wordNum: number) {
    const wrapper = document.querySelector(`#${pageNum}-${wordNum}`);

    if (wrapper) {
      wrapper.classList.add('read');
    }
  }

  private writePage(p: Page, index: number) {
    const textSection  = createElement('section');
    const imageSection = createElement('section');
    const paragraph    = createElement('p');
    const wordWrappers = p.text.split(' ').map((w, i) => `<span id="${index}-${i}">${w}</span>`);

    paragraph.innerHTML = wordWrappers.join(' ');

    textSection.appendChild(paragraph);
    imageSection.setAttribute('data-background', p.image);

    this.elem.appendChild(textSection);
    this.elem.appendChild(imageSection);
  }
}