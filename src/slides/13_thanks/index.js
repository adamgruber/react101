import React from 'react';
import { Slide, Image } from 'spectacle';
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

export default [
  <Slide {...slideProps} transition={['fade']}>
    {notes.one}
    <FlexContainer direction="column" fullHeight>
      <SlideTitle style={{marginTop: 100}} textFont="primary" size={5}>Download Complete</SlideTitle>
      <FlexContainer align="center" justify="space-around" style={{flex: 1, margin: '0 0 10% 0'}}>
        <Image src={images.neo} />
      </FlexContainer>
    </FlexContainer>
  </Slide>,

  <Slide {...slideProps} transition={['slide']} align="center center">
    <FlexContainer direction="column" fullHeight>
      <SlideTitle>The End</SlideTitle>
      <FlexContainer justify="center">
        <Subhead>&nbsp;</Subhead>
        <Typing startDelay={1000}>
          <FlexContainer justify="center">
            <Subhead>So long and</Subhead>
            <Typing.Delay ms={300} />
            <Handwriting margin="0 3px 0 10px">thanks</Handwriting>
            <Subhead>for all the fish!</Subhead>
          </FlexContainer>
        </Typing>
      </FlexContainer>
    </FlexContainer>
  </Slide>
];
