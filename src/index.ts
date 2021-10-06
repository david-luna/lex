import { Auca } from './auca';
import { RevealWriter } from './reveal-writer';

declare let webkitSpeechRecognition: {
  new (): SpeechRecognition;
};

const elem = document.querySelector('.slides') as Element;
const auca = new Auca(new RevealWriter(elem), new webkitSpeechRecognition());
auca.init('./assets/tale.json');