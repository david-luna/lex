/// <reference path="../node_modules/@types/reveal/index.d.ts" />
import { Speecher, SpeechLocale } from './speecher';
import { WordsSolver } from './solver-words';
import { Solver } from './solver';
import { TaleSolver } from './solver-tale';

interface RevealEvent {
  currentSlide: HTMLElement;
}
interface RevealRoutes {
  down: boolean;
  left: boolean;
  right: boolean;
  up: boolean;
}

declare let webkitSpeechRecognition: {
  new (): SpeechRecognition;
};

let speecher: Speecher;
let solver: Solver;

const nextSlide = () => {
  const routes = (Reveal as any).availableRoutes() as RevealRoutes;
  console.log('down', routes.down, 'right', routes.right);
  Reveal.next();
}

const processSlideEvent = (event: RevealEvent) => {
  const slide = event.currentSlide;
  const parent = slide.parentElement;
  const locale = parent?.getAttribute('data-locale') as SpeechLocale;
  const type = parent?.getAttribute('data-type');

  if (!speecher) {
    speecher = new Speecher(new webkitSpeechRecognition(), { locale });
  }

  if (solver) solver.disconnect();

  switch(type) {
    case 'words':
      solver = new WordsSolver(speecher.$events, nextSlide, slide);
      break;
    case 'tale':
      solver = new TaleSolver(speecher.$events, nextSlide, slide);
      break;
  }
};



// Wire up with reveal API
Reveal.addEventListener('slidechanged', processSlideEvent);
Reveal.addEventListener('ready', processSlideEvent);
