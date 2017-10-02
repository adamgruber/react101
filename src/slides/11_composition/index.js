import React from 'react';
import { Slide, Image, ComponentPlayground } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import Typing from 'react-typing-animation';
import { FlexContainer } from 'common-styled-components';
import {
  Handwriting,
  images,
  imgStyle,
  slideProps,
  SlideTitle,
  Subhead,
} from '../common-elements';
import notes from './notes';
import notes3 from './notes_3.md';
import crewlist from './composition.example';

export default [
  <Slide {...slideProps} transition={['slide']} align="center center">
    {notes.one}
    <FlexContainer direction="column" fullHeight>
      <SlideTitle>Composition</SlideTitle>
      <FlexContainer justify="center">
        <Subhead>&nbsp;</Subhead>
        <Typing startDelay={1000}>
          <FlexContainer justify="center">
            <Subhead>Putting it all</Subhead>
            <Typing.Delay ms={300} />
            <Handwriting margin="0 3px 0 10px">together</Handwriting>
            <Subhead>.</Subhead>
          </FlexContainer>
        </Typing>
      </FlexContainer>
    </FlexContainer>
  </Slide>,

  <Slide {...slideProps} transition={['fade']}>
    {notes.two}
    <FlexContainer direction="column" fullHeight>
      <SlideTitle size={5}>&nbsp;</SlideTitle>
      <div style={{flex:1, position:'relative'}}>
        <Image src={images.crewTracker} style={{...imgStyle}} />
      </div>
    </FlexContainer>
  </Slide>,

  <CodeSlide
    className="code-slide"
    transition={['slide']}
    notes={notes3}
    lang="jsx"
    code={crewlist}
    ranges={[
      { loc: [0, 3] },
      { loc: [4, 9] },
      { loc: [10, 17] },
      { loc: [18, 27] },
      { loc: [28, 46] },
      { loc: [30, 31] },
      { loc: [31, 43] },
    ]} />,

  <Slide {...slideProps} transition={['slide']} bgColor="bcGrey600" align="center center">
    {notes.four}
    <ComponentPlayground code={crewlist} />
  </Slide>
];
