import React from 'react';
import { Notes } from 'spectacle'
import ReactMarkdown from 'react-markdown';
import notes1 from './notes_1.md';
import notes2 from './notes_2.md';
import notes3 from './notes_3.md';
import notes4 from './notes_4.md';

const one = <Notes><ReactMarkdown source={ notes1 } /></Notes>;
const two = <Notes><ReactMarkdown source={ notes2 } /></Notes>;
const three = <Notes><ReactMarkdown source={ notes3 } /></Notes>;
const four = <Notes><ReactMarkdown source={ notes4 } /></Notes>;

export default {
  one,
  two,
  three,
  four
};
