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
import notes3 from './notes_3.md';
import notes4 from './notes_4.md';
import notes5 from './notes_5.md';
import functionalComponent from './functional.example';
import classComponent from './class.example';
import clock from '../08_clock/clock.example';
import classClockComponent from './class-clock.example';
import classClockLive from './class-clock-live.example';

export default [
  <Slide {...slideProps} transition={['slide']} align="center center">
    {notes.one}
    <FlexContainer direction="column" fullHeight>
      <SlideTitle>Components</SlideTitle>
      <FlexContainer justify="center">
        <Subhead>&nbsp;</Subhead>
        <Typing startDelay={1200}>
          <FlexContainer justify="center">
            <Subhead>Building an app</Subhead>
            <Typing.Delay ms={300} />
            <Handwriting margin="0 10px">one piece</Handwriting>
            <Subhead>at a time.</Subhead>
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
    code={functionalComponent}
    ranges={[
      { loc: [0, 3], title: 'Functional Component' },
      { loc: [5, 8], title: 'Functional Component' }
    ]} />,

  <CodeSlide
    className="code-slide"
    notes={notes3}
    transition={['slide']}
    lang="jsx"
    code={classComponent}
    ranges={[
      { loc: [0, 5], title: 'Class Component' }
    ]} />,

  <CodeSlide
    className="code-slide"
    notes={notes4}
    transition={['slide']}
    lang="jsx"
    code={clock}
    ranges={[
      { loc: [0, 8], title: 'TickTock' },
      { loc: [14, 15] },
      { loc: [19, 21] },
    ]} />,

  <CodeSlide
    className="code-slide"
    notes={notes5}
    transition={['slide']}
    lang="jsx"
    code={classClockComponent}
    ranges={[
      { loc: [0, 1], title: 'TickTock' },
      { loc: [1, 5] },
      { loc: [6, 12] },
      { loc: [13, 16] },
      { loc: [17, 22] },
      { loc: [23, 33] },
      { loc: [35, 39] },
    ]} />,

  <Slide {...slideProps} maxWidth="80%" transition={['slide']} bgColor="bcGrey600" align="center center">
    <ComponentPlayground code={classClockLive} />
  </Slide>
];
