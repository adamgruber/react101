import React from 'react';
import { Slide } from 'spectacle';
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

export default [
  <Slide {...slideProps} transition={['slide']} align="center center">
    {notes.one}
    <FlexContainer direction="column" fullHeight>
      <SlideTitle>Tick Tock</SlideTitle>
      <FlexContainer justify="center">
        <Subhead>&nbsp;</Subhead>
        <Typing startDelay={1000}>
          <FlexContainer justify="center">
            <Subhead>Time flies when you’re</Subhead>
            <Typing.Delay ms={300} />
            <Handwriting margin="0 3px 0 10px">having fun</Handwriting>
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
      { loc: [0, 6] },
      { loc: [2, 3] },
      { loc: [3, 4] },
      { loc: [7, 16] },
      { loc: [8, 10] },
      { loc: [11, 15] },
      { loc: [17, 18] },
    ]} />,
];
