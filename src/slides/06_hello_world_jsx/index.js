import React from 'react';
import { Slide, ComponentPlayground } from 'spectacle';
import {
  slideProps,
} from '../common-elements';
import notes from './notes';
import helloWorldJSX from './hello-jsx.example';

export default [
  <Slide {...slideProps} maxWidth="80%" transition={['slide']} bgColor="bcGrey600" align="center center">
    {notes.one}
    <ComponentPlayground code={helloWorldJSX} />
  </Slide>
];
