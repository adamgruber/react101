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
  <Slide {...slideProps} align="center center">
    {notes.one}
    <Image height={145} src={images.reactLogo} />
    <SlideTitle size={1}>React 101</SlideTitle>
    <FlexContainer justify="center">
      <Subhead>&nbsp;</Subhead>
    </FlexContainer>
  </Slide>,

  <Slide {...slideProps} align="center center">
    {notes.one}
    <Image height={145} src={images.reactLogo} />
    <SlideTitle size={1}>React 101</SlideTitle>
    <FlexContainer justify="center">
      <Subhead>&nbsp;</Subhead>
      <Typing>
        <FlexContainer justify="center">
          <Subhead>A Comprehensive</Subhead>
          <Typing.Backspace count={13} delay={800} />
          <Handwriting margin="0 12px">Brief</Handwriting>
          <Typing.Delay ms={300} />
          <Subhead>Introduction to React</Subhead>
        </FlexContainer>
      </Typing>
      </FlexContainer>
  </Slide>,

  <Slide {...slideProps} align="center center">
    {notes.two}
    <Subhead margin="0 0 2rem 0">https://codepen.io/adamgruber/pen/zEzPRm/</Subhead>
    <Image src={images.codepen} />
  </Slide>
];
