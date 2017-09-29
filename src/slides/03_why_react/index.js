import React from 'react';
import { Slide, Appear, Text } from 'spectacle';
import { FlexContainer } from 'common-styled-components';
import {
  Emoji,
  Subhead,
  bulletProps,
  SlideTitle,
  slideProps,
} from '../common-elements';
import notes from './notes';

export default [
  <Slide {...slideProps} transition={['slide']}>
    { notes.one }
    <FlexContainer direction="column" fullHeight>
      <FlexContainer direction="column" justify="center" basis={40}>
        <SlideTitle>Why Use React?</SlideTitle>
        <Subhead>&nbsp;</Subhead>
      </FlexContainer>
      <FlexContainer wrap="wrap" align="center" justify="space-around" basis={50}>
        <div style={{flexBasis:'33%'}}>
          <Appear>
            <Text {...bulletProps}>
              <Emoji aria-label="running shoe">👟</Emoji>
              <br/>Speed
            </Text>
          </Appear>
        </div>
        <div style={{flexBasis:'33%'}}>
          <Appear>
            <Text {...bulletProps}>
              <Emoji aria-label="atom">⚛</Emoji>
              <br/>Reuse
            </Text>
          </Appear>
        </div>
        <div style={{flexBasis:'33%'}}>
          <Appear>
            <Text {...bulletProps}>
              <Emoji aria-label="arrow loop">🔁</Emoji>
              <br/>Flux
            </Text>
          </Appear>
        </div>
        <div style={{flexBasis:'33%'}}>
          <Appear>
            <Text {...bulletProps}>
              <Emoji aria-label="books">📚</Emoji>
              <br/>Learning
            </Text>
          </Appear>
        </div>
        <div style={{flexBasis:'33%'}}>
          <Appear>
            <Text {...bulletProps}>
              <Emoji aria-label="tools">🛠</Emoji>
              <br/>Tooling
            </Text>
          </Appear>
        </div>
        <div style={{flexBasis:'33%'}}>
          <Appear>
            <Text {...bulletProps}>
              <Emoji aria-label="handshake">🤝</Emoji>
              <br/>Community
            </Text>
          </Appear>
        </div>
      </FlexContainer>

    </FlexContainer>
  </Slide>
];
