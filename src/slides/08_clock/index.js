import React from 'react';
import { Slide, ComponentPlayground } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import Typing from 'react-typing-animation';
import { FlexContainer } from 'common-styled-components';
import {
  Handwriting,
  slideProps,
  SlideTitle,
  Subhead,
} from '../common-elements';
import notes from './notes';
import notes2 from './notes_2.md';
import clock from './clock.example';
import clockLive from './clock-live.example';

export default [
  <Slide {...slideProps} transition={['slide']} align="center center">
    {notes.one}
    <FlexContainer direction="column" fullHeight>
      <SlideTitle>Tick Tock</SlideTitle>
      <FlexContainer justify="center">
        <Subhead>&nbsp;</Subhead>
        <Typing startDelay={1000}>
          <FlexContainer justify="center">
            <Subhead>Time is an</Subhead>
            <Typing.Delay ms={300} />
            <Handwriting margin="0 3px 0 10px">illusion</Handwriting>
            <Subhead>.</Subhead>
          </FlexContainer>
        </Typing>
      </FlexContainer>
    </FlexContainer>
  </Slide>,

  <CodeSlide
    className="code-slide"
    notes={notes2}
    transition={['slide']}
    lang="jsx"
    code={clock}
    ranges={[
      { loc: [0, 8] },
      { loc: [3, 4] },
      { loc: [4, 5] },
      { loc: [9, 18] },
      { loc: [10, 12] },
      { loc: [13, 17] },
      { loc: [19, 21] },
    ]} />,

  <Slide {...slideProps} maxWidth="80%" transition={['slide']} bgColor="bcGrey600" align="center center">
    {notes.three}
    <ComponentPlayground code={clockLive} />
  </Slide>
];
