import React from 'react';
import { Notes } from 'spectacle'
import ReactMarkdown from 'react-markdown';
import notes1 from './notes_1.md';
import notes5 from './notes_5.md';

const one = <Notes><ReactMarkdown source={ notes1 } /></Notes>;
const five = <Notes><ReactMarkdown source={ notes5 } /></Notes>;

export default {
  one,
  five
};
