import React from 'react';
import { Notes } from 'spectacle'
import ReactMarkdown from 'react-markdown';
import notes from './notes.md';

const main = <Notes><ReactMarkdown source={ notes } /></Notes>;

export default {
  main,
};
