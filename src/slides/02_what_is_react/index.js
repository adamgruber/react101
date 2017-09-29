import React from 'react';
import { Slide, Appear, Text } from 'spectacle';
import Typing from 'react-typing-animation';
import { FlexContainer } from 'common-styled-components';
import {
  bulletProps,
  Emoji,
  Handwriting,
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
        <SlideTitle>What is React?</SlideTitle>
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
            <br/>Declarative
          </Text>
        </Appear>
        <Appear>
          <Text {...bulletProps}>
            <Emoji aria-label="gear">⚙</Emoji>
            <br/>Component-Based
          </Text>
        </Appear>
        <Appear>
          <Text {...bulletProps}>
            <Emoji aria-label="laptop">💻</Emoji>
            <Emoji aria-label="cellphone">📱</Emoji>
            <br/>Use Anywhere
          </Text>
        </Appear>
      </FlexContainer>

    </FlexContainer>
  </Slide>
];
