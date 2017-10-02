import React from 'react';
import { Slide, Image } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import Typing from 'react-typing-animation';
import { FlexContainer } from 'common-styled-components';
import {
  Handwriting,
  images,
  slideProps,
  SlideTitle,
  Subhead,
} from '../common-elements';
import notes from './notes';
import notes2 from './notes_2.md';
import hoc from './hoc.example';

export default [
  <Slide {...slideProps} transition={['slide']}>
    { notes.one }
    <FlexContainer direction="column" fullHeight>
      <SlideTitle>Beyond the Basics</SlideTitle>
      <FlexContainer justify="center">
        <Subhead>&nbsp;</Subhead>
        <Typing startDelay={1200}>
          <FlexContainer justify="center">
            <Subhead>Let me just</Subhead>
            <Typing.Delay ms={300} />
            <Handwriting margin="0 10px">change</Handwriting>
            <Typing.Delay ms={300} />
            <Subhead>this one line of code...</Subhead>
          </FlexContainer>
        </Typing>
      </FlexContainer>
    </FlexContainer>
  </Slide>,

  <CodeSlide
    className="code-slide"
    transition={['slide']}
    notes={notes2}
    lang="jsx"
    code={hoc}
    ranges={[
      { loc: [0, 15], note: 'Higher-Order Component' },
    ]} />,

  <Slide {...slideProps} transition={['fade']}>
    {notes.three}
    <FlexContainer direction="column" fullHeight>
      <SlideTitle style={{marginTop: 100}} textFont="primary" size={5}>State Management</SlideTitle>
      <FlexContainer align="center" justify="space-around" style={{flex: 1, margin: '0 0 10% 0'}}>
        <div>
          <Image src={images.reduxLogo} />
          <Subhead>Redux</Subhead>
        </div>
        <div>
          <Image src={images.mobxLogo} />
          <Subhead>MobX</Subhead>
        </div>
      </FlexContainer>
    </FlexContainer>
  </Slide>
];
