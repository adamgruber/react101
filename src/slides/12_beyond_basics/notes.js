import React from 'react';
import { Notes } from 'spectacle'
import ReactMarkdown from 'react-markdown';
import notes1 from './notes_1.md';
import notes3 from './notes_3.md';

const one = <Notes><ReactMarkdown source={ notes1 } /></Notes>;
const three = <Notes><ReactMarkdown source={ notes3 } /></Notes>;

export default {
  one,
  three
};
