import React from 'react';
import { Notes } from 'spectacle'
import ReactMarkdown from 'react-markdown';
import notes1 from './notes_1.md';
import notes2 from './notes_2.md';

const one = <Notes><ReactMarkdown source={ notes1 } /></Notes>;
const two = <Notes><ReactMarkdown source={ notes2 } /></Notes>;

export default {
  one,
  two
};
