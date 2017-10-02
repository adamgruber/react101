import React from 'react';
import { Slide, ComponentPlayground } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import Typing from 'react-typing-animation';
import { FlexContainer } from 'common-styled-components';
import {
  slideProps,
  SlideTitle,
  Subhead,
} from '../common-elements';
import notes from './notes';
import notes2 from './notes_2.md';
import notes3 from './notes_3.md';
import notes4 from './notes_4.md';
import helloShell from './hello-shell.example';
import helloScripts from './hello-scripts.example';
import helloWorld from './hello.example';
import helloWorldLive from './hello-working.example';

export default [
  <Slide {...slideProps} transition={['slide']} align="center center">
    {notes.one}
    <FlexContainer direction='column' fullHeight>
      <SlideTitle>“Hello, world!”</SlideTitle>
      <FlexContainer justify="center">
        <Subhead>&nbsp;<br/>&nbsp;</Subhead>
        <Typing startDelay={1200}>
          <FlexContainer justify="center">
            <Subhead>Rendering our first</Subhead>
            <Typing.Delay ms={300} />
            <Subhead margin="0 10px" textFont="hand" textColor="bcRed600">element</Subhead>
            <Subhead>with React.</Subhead>
          </FlexContainer>
        </Typing>
      </FlexContainer>
    </FlexContainer>
  </Slide>,

  <CodeSlide
    className="code-slide"
    notes={notes2}
    transition={['slide']}
    lang="html"
    code={helloShell}
    ranges={[
      { loc: [0, 12] },
      { loc: [7, 9] },
    ]} />,

  <CodeSlide
    className="code-slide"
    notes={notes3}
    transition={['slide']}
    lang="html"
    code={helloScripts}
    ranges={[
      { loc: [10, 13] },
    ]} />,

  <CodeSlide
    className="code-slide"
    notes={notes4}
    transition={['slide']}
    lang="html"
    code={helloWorld}
    ranges={[
      { loc: [14, 23] },
      { loc: [16, 17] },
      { loc: [17, 20] },
      { loc: [20, 21] },
    ]} />,

  <Slide {...slideProps} maxWidth="80%" transition={['slide']} bgColor="bcGrey600" align="center center">
    {notes.five}
    <ComponentPlayground code={helloWorldLive} />
  </Slide>

];
