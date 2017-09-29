import React from 'react';
import { Notes } from 'spectacle'
import ReactMarkdown from 'react-markdown';
import notes1 from './notes_1.md';

const one = <Notes><ReactMarkdown source={ notes1 } /></Notes>;

export default {
  one
};
