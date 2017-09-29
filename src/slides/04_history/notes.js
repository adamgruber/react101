import React from 'react';
import { Notes } from 'spectacle'
import ReactMarkdown from 'react-markdown';
import notes from './notes.md';
import notesThumb from './notes_thumb.md';
import notesThumbDn from './notes_thumb_down.md';
import notesXhp from './notes_xhp.md';
import notesFaxJs from './notes_faxjs.md';
import notesReact from './notes_react.md';
import notesOpensource from './notes_opensource.md';

const main = <Notes><ReactMarkdown source={ notes } /></Notes>;
const thumb = <Notes><ReactMarkdown source={ notesThumb } /></Notes>;
const thumbDown = <Notes><ReactMarkdown source={ notesThumbDn } /></Notes>;
const xhp = <Notes><ReactMarkdown source={ notesXhp } /></Notes>;
const faxjs = <Notes><ReactMarkdown source={ notesFaxJs } /></Notes>;
const react = <Notes><ReactMarkdown source={ notesReact } /></Notes>;
const opensource = <Notes><ReactMarkdown source={ notesOpensource } /></Notes>;

export default {
  main,
  thumb,
  thumbDown,
  xhp,
  faxjs,
  react,
  opensource
};
