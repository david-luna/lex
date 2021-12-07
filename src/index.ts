import { Speecher } from './speecher';

declare let webkitSpeechRecognition: {
  new (): SpeechRecognition;
};

const elem = document.querySelector('.slides') as Element;
const speecher = new Speecher(new webkitSpeechRecognition());
