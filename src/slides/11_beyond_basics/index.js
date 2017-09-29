import React from 'react';
import { Slide, Appear, Text } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import Typing from 'react-typing-animation';
import { FlexContainer } from 'common-styled-components';
import {
  Emoji,
  bulletProps,
  Handwriting,
  headingProps,
  slideProps,
  SlideTitle,
  Subhead,
} from '../common-elements';
import notes from './notes';

export default [
  <Slide {...slideProps} transition={['slide']}>
    { notes.one }
    <FlexContainer direction="column" fullHeight>
      <FlexContainer direction="column" justify="center" basis={40}>
        <SlideTitle>Beyond the Basics</SlideTitle>
        <FlexContainer justify="center">
          <Subhead>&nbsp;</Subhead>
          <Typing startDelay={1200}>
            <FlexContainer justify="center">
              <Subhead>A JavaScript</Subhead>
              <Typing.Delay ms={300} />
              <Handwriting margin="0 10px">Library</Handwriting>
              <Typing.Delay ms={300} />
              <Subhead>for Building User Interfaces</Subhead>
            </FlexContainer>
          </Typing>
        </FlexContainer>
      </FlexContainer>

      <FlexContainer align="center" justify="space-around" basis={50}>
        <Appear>
          <Text {...bulletProps}>
            <Emoji aria-label="megaphone">📣</Emoji>
            <br/>HOCs
          </Text>
        </Appear>
        <Appear>
          <Text {...bulletProps}>
            <Emoji aria-label="laptop">💻</Emoji>
            <Emoji aria-label="cellphone">📱</Emoji>
            <br/>State Management
          </Text>
        </Appear>
      </FlexContainer>

    </FlexContainer>
  </Slide>
];
